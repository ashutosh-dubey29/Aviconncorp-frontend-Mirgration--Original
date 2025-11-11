// Compatibility shims to support imports from @angular/material/legacy-* used before migration
// These re-export the current Material v17 APIs under the legacy module paths so the old imports keep working

declare module '@angular/material/legacy-dialog' {
  export {
    MatDialog as MatLegacyDialog,
    MatDialogRef as MatLegacyDialogRef,
    MAT_DIALOG_DATA as MAT_LEGACY_DIALOG_DATA,
    MatDialogConfig as MatLegacyDialogConfig,
    MatDialogModule as MatLegacyDialogModule
  } from '@angular/material/dialog';
}

declare module '@angular/material/legacy-table' {
  export {
    MatTableDataSource as MatLegacyTableDataSource,
    MatTable as MatLegacyTable,
    MatTableModule as MatLegacyTableModule
  } from '@angular/material/table';
}

declare module '@angular/material/legacy-paginator' {
  export {
    MatPaginator as MatLegacyPaginator,
    MatPaginatorModule as MatLegacyPaginatorModule
  } from '@angular/material/paginator';
}

declare module '@angular/material/legacy-snack-bar' {
  export {
    MatSnackBar as MatLegacySnackBar,
    MatSnackBarConfig as MatLegacySnackBarConfig,
    MatSnackBarModule as MatLegacySnackBarModule,
    MatSnackBarHorizontalPosition as MatLegacySnackBarHorizontalPosition,
    MatSnackBarVerticalPosition as MatLegacySnackBarVerticalPosition
  } from '@angular/material/snack-bar';
}

declare module '@angular/material/legacy-form-field' {
  export {
    MatFormField as MatLegacyFormField,
    MatFormFieldModule as MatLegacyFormFieldModule
  } from '@angular/material/form-field';
}

// If additional legacy entrypoints are used elsewhere, add them here.

declare module '@angular/material/legacy-button' {
  export { MatButtonModule as MatLegacyButtonModule } from '@angular/material/button';
}

declare module '@angular/material/legacy-input' {
  export { MatInputModule as MatLegacyInputModule } from '@angular/material/input';
}

declare module '@angular/material/legacy-list' {
  export { MatListModule as MatLegacyListModule } from '@angular/material/list';
}

declare module '@angular/material/legacy-menu' {
  export { MatMenuModule as MatLegacyMenuModule } from '@angular/material/menu';
}

declare module '@angular/material/legacy-progress-spinner' {
  export { MatProgressSpinnerModule as MatLegacyProgressSpinnerModule } from '@angular/material/progress-spinner';
}

declare module '@angular/material/legacy-select' {
  export { MatSelectModule as MatLegacySelectModule } from '@angular/material/select';
}

declare module '@angular/material/legacy-slide-toggle' {
  export { MatSlideToggleModule as MatLegacySlideToggleModule, MatSlideToggleChange as MatLegacySlideToggleChange, MatSlideToggle as MatLegacySlideToggle } from '@angular/material/slide-toggle';
}

declare module '@angular/material/legacy-radio' {
  export { MatRadioModule as MatLegacyRadioModule } from '@angular/material/radio';
}

declare module '@angular/material/legacy-card' {
  export { MatCardModule as MatLegacyCardModule } from '@angular/material/card';
}

