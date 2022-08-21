import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { Actions, ofType } from '@ngrx/effects';
import * as fromApp from '../store/app.reducer';
import { Recipe } from './recipe.model';
import * as RecipeActions from './store/recipe.actions';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    // private dataStorageService: DataStorageService,
    private store: Store<fromApp.AppState>,
    // private recipeService: RecipeService,
    private actions$: Actions
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    return this.store.select('recipes').pipe(
      take(1),
      map((recipesState) => recipesState.recipes),
      switchMap((recipes) => {
        if (recipes.length === 0) {
          this.store.dispatch(new RecipeActions.FetchRecipesAction());
          return this.actions$.pipe(
            ofType(RecipeActions.SET_RECIPES),
            take(1) // We only interested in this event once, it is not an ongoing process
          );
        } else {
          return of(recipes);
        }
      })
    );

    // const recipes = this.recipeService.getRecipes();

    // if (recipes.length === 0) return this.dataStorageService.fetchRecipes();
    // return recipes;
  }
}
