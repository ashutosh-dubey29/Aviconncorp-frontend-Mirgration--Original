import { ModalService } from './services/modalService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
// LoginComponent converted to standalone; removed from module imports
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GlobalService } from './services/global.service';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';



/* chart library */
// highcharts-angular package is incompatible with the current Ivy compiler in this
// workspace (older ViewEngine-only distribution). We use a small local shim
// (`HighchartsShimDirective`) declared below instead of importing the external
// module so the app can build. Replace with the real module after updating
// `highcharts-angular` to an Ivy/ESM-compatible release.

// CustomerDashboardComponent converted to standalone; removed from module declarations
// WarehouseComponent converted to standalone; removed from module imports
// BaselineComponent converted to standalone; removed from module imports
import { MatSnackBarModule, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
// AdminComponent converted to standalone; removed from module imports
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Note: most UI components have been converted to standalone components.
// This module now acts as a compatibility bag that provides and re-exports
// Angular Material modules and other central providers for any remaining
// non-standalone code.


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    // Re-export commonly used Material modules for legacy non-standalone code
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
  ],
  providers: [
    GlobalService,
    ModalService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})

export class AppModule { }
