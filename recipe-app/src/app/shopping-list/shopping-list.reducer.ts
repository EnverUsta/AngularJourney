import { Action } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';

const initialState = {
  ingredients: [new Ingredient('Apple', 5), new Ingredient('Tomatoes', 10)],
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      const testIng: Ingredient = new Ingredient('test', 12);
      return {
        ...state, // This is a list of ingredients
        testIng,
      };
      break;
    default:
      break;
  }
}
