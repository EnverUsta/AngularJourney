import {
  RecipesActions,
  FetchRecipesAction,
} from './../recipes/store/recipe.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, take, concatMap, tap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import * as AuthActions from '../auth/store/auth.actions';
import { User } from '../auth/user.model';
import { DataStorageService } from '../shared/data-storage.service';
import * as FromApp from '../store/app.reducer';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private authSubscription: Subscription;
  collapsed: boolean = true;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<FromApp.AppState>
  ) {}

  ngOnInit() {
    this.authSubscription = this.store
      .select('auth')
      .pipe(
        map((authState) => {
          return authState.user;
        })
      )
      .subscribe((user: User) => {
        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipesAction());
    // this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipesAction());
    // this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
    // this.authService.logout();
  }
}
