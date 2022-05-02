import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),

    // custom modules
    SharedModule,
    AppRoutingModule,
    CoreModule, // This module is eagerly-loaded module

    // We have removed both RecipesModule and ShoppingListModule because we used lazy loading on them
    // AuthModule,
    // RecipesModule
    // ShoppingListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
