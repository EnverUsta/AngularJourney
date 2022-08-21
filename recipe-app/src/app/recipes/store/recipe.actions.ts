import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
export const ADD_RECIPE = '[Recipes] Add Recipe';
export const STORE_RECIPES = '[Recipes] Store Recipes';
export const STORE_RECIPES_SUCCESS = '[Recipes] Store Recipes Success';
export const UPDATE_RECIPE = '[Recipes] Update Recipe';
export const DELETE_RECIPE = '[Recipes] Delete Recipe';

export class SetRecipesAction implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}

export class FetchRecipesAction implements Action {
  readonly type = FETCH_RECIPES;

  constructor() {}
}

export class StoreRecipesAction implements Action {
  readonly type = STORE_RECIPES;
}

export class AddRecipeAction implements Action {
  readonly type = ADD_RECIPE;

  constructor(public payload: Recipe) {}
}

export class UpdateRecipeAction implements Action {
  readonly type = UPDATE_RECIPE;

  constructor(public payload: { index: number; recipe: Recipe }) {}
}

export class DeleteRecipeAction implements Action {
  readonly type = DELETE_RECIPE;

  constructor(public payload: number) {}
}

export type RecipesActions =
  | SetRecipesAction
  | FetchRecipesAction
  | StoreRecipesAction
  | AddRecipeAction
  | UpdateRecipeAction
  | DeleteRecipeAction;
