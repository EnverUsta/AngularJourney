import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { AnalyticsService } from './app/shared/analytics.service';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(er r));

bootstrapApplication(AppComponent, {
  providers: [ 
    // AnalyticsService
  ],
});
