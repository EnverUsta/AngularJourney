import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  getRecipeById$ = this.route.params.pipe(
    map((params: Params) => {
      return +params['id'];
    }),
    mergeMap((id: number) => {
      this.recipeId = id;
      return this.store.select('recipes').pipe(
        map((recipesState) => {
          return recipesState.recipes[this.recipeId];
        })
      );
    })
  );

  constructor(
    // private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.getRecipeById$.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
    // this.route.params.subscribe((params: Params) => {
    //   this.recipeId = +params['id'];
    //   this.recipe = this.recipeService.getRecipeById(this.recipeId);
    // });
  }

  onAddToShoppingList() {
    this.store.dispatch(
      new ShoppingListActions.AddIngredientsAction(this.recipe.ingredients)
    );
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.recipeId);
    this.store.dispatch(new RecipeActions.DeleteRecipeAction(this.recipeId));
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
