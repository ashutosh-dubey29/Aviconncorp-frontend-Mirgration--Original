import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'hammerjs';
import { MockApiInterceptor } from './app/interceptors/mock-api.interceptor';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule, HttpClientModule, AppRoutingModule),
    // Register MockApiInterceptor so developers can enable mock mode at runtime
    { provide: HTTP_INTERCEPTORS, useClass: MockApiInterceptor, multi: true }
  ]
}).catch(err => console.error(err));
