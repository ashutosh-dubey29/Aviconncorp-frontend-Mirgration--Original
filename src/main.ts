import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // Import providers from the existing AppModule so we don't need to
    // convert the entire module graph yet. This keeps services and
    // module-level providers available while using the standalone
    // bootstrap API.
    importProvidersFrom(AppModule)
  ]
}).catch(err => console.error(err));
