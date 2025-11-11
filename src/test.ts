// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// zone.js v0.14 exports moved; use the testing entry from the package root.
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyDialogModule as MatDialogModule, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts';
import { HighchartsShimDirective } from './app/testing/highcharts-shim.directive';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Set sane defaults in localStorage used by many components
try {
  if (!localStorage.getItem('account')) {
    localStorage.setItem('account', JSON.stringify({ id: '1', UserType: '1' }));
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
  // ignore when localStorage is not available in some environments
}

// Stub Highcharts chart/Chart to avoid test-time initialization crashes when components call
// Highcharts.chart/Chart without full options. Tests should not rely on real rendering.
try {
  const anyH = Highcharts as any;
  // Ensure common internals exist
  anyH.seriesTypes = anyH.seriesTypes || [];
  anyH.series = anyH.series || [];
  anyH.charts = anyH.charts || [];
  anyH.addEvent = anyH.addEvent || function () { };
  anyH.each = anyH.each || function (arr: any, fn: any) { if (arr && Array.isArray(arr)) arr.forEach(fn); };
  anyH.extend = anyH.extend || function (a: any, b: any) { Object.assign(a, b || {}); };
  // Replace the real chart factory with a test-safe stub so components that call
  // Highcharts.chart/Chart during ngOnInit don't execute the full Highcharts
  // initialization (which expects complex internal state).
  anyH.chart = function () {
    return { series: [], legend: { allItems: [] }, redraw: () => { }, reflow: () => { }, chart: {} };
  };
  anyH.Chart = anyH.chart;
} catch (e) { }
// Provide common testing modules/providers globally to reduce missing-provider failures
beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [HighchartsShimDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    imports: [BrowserAnimationsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCardModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule],
    providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
});
});
