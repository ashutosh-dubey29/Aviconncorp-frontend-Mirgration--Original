import { ModalService } from './services/modalService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GlobalService } from './services/global.service';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { DialogOverComponent } from './dialog-over/dialog-over.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';



/* chart library */
// highcharts-angular package is incompatible with the current Ivy compiler in this
// workspace (older ViewEngine-only distribution). We use a small local shim
// (`HighchartsShimDirective`) declared below instead of importing the external
// module so the app can build. Replace with the real module after updating
// `highcharts-angular` to an Ivy/ESM-compatible release.

import { ComingDashComponent } from './coming-dash/coming-dash.component';
import { OutputGraphComponent } from './output-graph/output-graph.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WhMeteringComponent } from './wh-metering/wh-metering.component';
import { BaselineComponent } from './baseline/baseline.component';
import { DialogSwitchdashComponent } from './dialog-switchdash/dialog-switchdash.component';
import { MatLegacySnackBarModule as MatSnackBarModule, MatLegacySnackBarConfig as MatSnackBarConfig, MatLegacySnackBarHorizontalPosition as MatSnackBarHorizontalPosition, MatLegacySnackBarVerticalPosition as MatSnackBarVerticalPosition, } from '@angular/material/legacy-snack-bar';
import { AdminComponent } from './admin/admin.component';
import { AlarmComponent } from './alarm/alarm.component';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import * as more from 'highcharts/highcharts-more.src';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';
import { FirePumpAlarmComponent } from './fire-pump-alarm/fire-pump-alarm.component';
import { FemsComponent } from './fems/fems.component';
import { AddDeviceDialogComponent } from './add-device-dialog/add-device-dialog.component';
import { FemsDialogComponent } from './fems-dialog/fems-dialog.component';
import { AddDevtypeDialogComponent } from './add-devtype-dialog/add-devtype-dialog.component';
import { LightsWattDataComponent } from './lights-watt-data/lights-watt-data.component';
import { FanswattdataComponent } from './fanswattdata/fanswattdata.component';
import { DeviceDetailsFemsComponent } from './device-details-fems/device-details-fems.component';
import { ExpiredDeviceDetailsFemsComponent } from './expired-device-details-fems/expired-device-details-fems.component';
import { AvgDataComponent } from './avg-data/avg-data.component';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
import { LoadGraphComponent } from './load-graph/load-graph.component';
import { PfTableComponent } from './pf-table/pf-table.component';
import { LoadDataTableComponent } from './load-data-table/load-data-table.component';
import { CustomDateRangePickerComponent } from './custom-date-range-picker/custom-date-range-picker.component';
import { DgFuelExcelExportComponent } from './dg-fuel-excel-export/dg-fuel-excel-export.component';
import { SubmeteringComponent } from './submetering/submetering.component';
import { HighchartsShimDirective } from './testing/highcharts-shim.directive';
import { HighchartsStandaloneComponent } from './highcharts/highcharts-standalone.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogOverComponent,
    DashboardComponent,
    SuperAdminComponent,
    ComingDashComponent,
    OutputGraphComponent,
    CustomerDashboardComponent,
    WarehouseComponent,
    WhMeteringComponent,
    BaselineComponent,
    DialogSwitchdashComponent,
    AdminComponent,
    AlarmComponent,
    FirePumpAlarmComponent,
    FemsComponent,
    AddDeviceDialogComponent,
    FemsDialogComponent,
    AddDevtypeDialogComponent,
    LightsWattDataComponent,
    FanswattdataComponent,
    DeviceDetailsFemsComponent,
    ExpiredDeviceDetailsFemsComponent,
    AvgDataComponent,
    ExcelsheetComponent,
    LoadGraphComponent,
    PfTableComponent,
    LoadDataTableComponent,
    CustomDateRangePickerComponent,
    DgFuelExcelExportComponent,
    SubmeteringComponent,
    HighchartsShimDirective,
  ],
  exports: [MatDialogModule
  ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
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
    HighchartsStandaloneComponent,
    // HighchartsChartModule removed (see comment above). The local
    // HighchartsShimDirective provides the `highcharts-chart` selector.
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule], providers: [
      GlobalService,
      ModalService,
      provideHttpClient(withInterceptorsFromDi()),
    ]
})

export class AppModule { }
