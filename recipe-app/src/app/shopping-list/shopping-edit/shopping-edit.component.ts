import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm') shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        // this.editedItem = this.shoppingListService.getIngredient(index);
        this.store.select('shoppingList').subscribe((data) => {
          this.editedItem = data.ingredients[index];
          this.shoppingForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const value = this.shoppingForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredientsAction({
          index: this.editedItemIndex,
          ingredient: newIngredient,
        })
      );
      // this.shoppingListService.updateIngredient(
      //   this.editedItemIndex,
      //   newIngredient
      // );
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(
        new ShoppingListActions.AddIngredientAction(newIngredient)
      );
    }
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredientAction(this.editedItemIndex)
    );
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }
}
