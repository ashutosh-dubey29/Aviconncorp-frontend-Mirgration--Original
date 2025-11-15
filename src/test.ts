// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

declare const require: any;
declare const __karma__: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Provide some common testing modules/providers globally so individual
// specs don't all need to add HttpClientTestingModule or basic MatDialog
// providers after the migration to standalone components.
// Configure the TestBed via the initialized test environment's instance so
// the root injector used for standalone components picks up these modules.
getTestBed().configureTestingModule({
  imports: [HttpClientTestingModule],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
});

// Provide some sensible defaults in localStorage that many components read
// during construction/ngOnInit. This prevents null/undefined errors in tests.
try {
  if (!localStorage.getItem('account')) {
    localStorage.setItem('account', JSON.stringify({ id: 1, UserType: '1' }));
  }
  if (!localStorage.getItem('siteId')) {
    localStorage.setItem('siteId', '1');
  }
  if (!localStorage.getItem('sitename')) {
    localStorage.setItem('sitename', 'Test Site');
  }
  if (!localStorage.getItem('token')) {
    localStorage.setItem('token', 'test-token');
  }
} catch (e) {
  // localStorage unavailable in some environments — ignore.
}

// Then we find all the tests.
if (typeof (require as any).context === 'function') {
  const context = (require as any).context('./', true, /\.spec\.ts$/);
  context.keys().map(context);
} else if (typeof __karma__ !== 'undefined' && __karma__.files) {
  // Fallback for environments where webpack's require.context isn't available
  Object.keys(__karma__.files)
    .filter((file: string) => /\.spec\.ts$/.test(file))
    .forEach((file: string) => {
      // Karma serves files under /base/, remove that prefix and require
      const normalized = file.replace(/^\/base\//, './');
      try { require(normalized); } catch (e) { /* ignore */ }
    });
}
