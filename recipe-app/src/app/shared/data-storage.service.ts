import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import * as RecipesActions from '../recipes/store/recipe.actions';
import * as fromApp from '../store/app.reducer';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    // private recipeService: RecipeService,
    private store: Store<fromApp.AppState>,
  ) {}

  // storeRecipes() {
  //   const recipes = this.recipeService.getRecipes();
  //   this.http
  //     .put(
  //       'https://ng-course-recipe-a9cfd-default-rtdb.firebaseio.com/recipes.json',
  //       recipes
  //     )
  //     .subscribe();
  // }

  // fetchRecipes() {
  //   return this.http
  //     .get<Recipe[]>(
  //       'https://ng-course-recipe-a9cfd-default-rtdb.firebaseio.com/recipes.json'
  //     )
  //     .pipe(
  //       map((recipes: Recipe[]) => {
  //         return recipes.map((recipe) => {
  //           return {
  //             ...recipe,
  //             ingredients: recipe.ingredients ? recipe.ingredients : [],
  //           };
  //         });
  //       }),
  //       tap((recipes) => {
  //         this.store.dispatch(new RecipesActions.SetRecipesAction(recipes));
  //         // this.recipeService.setRecipes(recipes);
  //       })
  //     );
  // }
}
