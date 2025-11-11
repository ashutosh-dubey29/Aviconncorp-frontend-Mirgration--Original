import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // Provide commonly required platform providers that were previously
    // pulled in via the (now removed) AppModule. Keep this minimal so the
    // app can boot while the rest of the migration continues.
    importProvidersFrom(BrowserAnimationsModule),
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch(err => console.error(err));
