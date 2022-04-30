import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // custom modules
    CoreModule, // This module is eagerly-loaded module
    AppRoutingModule,
    SharedModule,
    // We have removed both RecipesModule and ShoppingListModule because we used lazy loading on them
    // AuthModule,
    // RecipesModule
    // ShoppingListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
