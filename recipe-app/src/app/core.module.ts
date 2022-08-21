import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './shared/auth-interceptor.service';

@NgModule({
  providers: [
    // RecipeService,  // Since we are using @ngrx/store, we don't need RecipeService anymore.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
