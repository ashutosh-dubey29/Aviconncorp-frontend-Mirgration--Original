// Compatibility wrapper to allow legacy `import { X } from '@angular/material'` usage
// Re-export commonly used Material symbols from their package-scoped entry points.
// Compatibility wrapper to re-export the module classes and commonly used symbols
// so legacy `import { X } from '@angular/material'` still works.
export { MatTableModule } from '@angular/material/table';
export { MatPaginatorModule } from '@angular/material/paginator';
export { MatSortModule } from '@angular/material/sort';
export { MatFormFieldModule } from '@angular/material/form-field';
export { MatInputModule } from '@angular/material/input';
export { MatButtonModule } from '@angular/material/button';
export { MatIconModule } from '@angular/material/icon';
export { MatGridListModule } from '@angular/material/grid-list';
export { MatToolbarModule } from '@angular/material/toolbar';
export { MatSidenavModule } from '@angular/material/sidenav';
export { MatListModule } from '@angular/material/list';
export { MatMenuModule } from '@angular/material/menu';
export { MatSelectModule } from '@angular/material/select';
export { MatSnackBarModule } from '@angular/material/snack-bar';
export { MatDialogModule, MatDialog } from '@angular/material/dialog';
export { MatSlideToggleModule } from '@angular/material/slide-toggle';
export { MatCardModule } from '@angular/material/card';
export { MatRadioModule } from '@angular/material/radio';
export { MatDatepickerModule } from '@angular/material/datepicker';
export { MatNativeDateModule } from '@angular/material/core';
export { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Re-export commonly used types and classes where available
export { MatTableDataSource } from '@angular/material/table';
export { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
export { MatSlideToggleChange } from '@angular/material/slide-toggle';

// Add more re-exports below as needed when other imports error.

// Re-export everything from common subpackages to satisfy legacy named imports
export * from '@angular/material/paginator';
export * from '@angular/material/sort';
export * from '@angular/material/table';
export * from '@angular/material/form-field';
export * from '@angular/material/input';
export * from '@angular/material/button';
export * from '@angular/material/icon';
export * from '@angular/material/grid-list';
export * from '@angular/material/toolbar';
export * from '@angular/material/sidenav';
export * from '@angular/material/list';
export * from '@angular/material/menu';
export * from '@angular/material/select';
export * from '@angular/material/snack-bar';
export * from '@angular/material/dialog';
export * from '@angular/material/slide-toggle';
export * from '@angular/material/card';
export * from '@angular/material/radio';
export * from '@angular/material/datepicker';
export * from '@angular/material/core';
export * from '@angular/material/progress-spinner';

// Provide a small stub for throwMatDialogContentAlreadyAttachedError if code imports it
export const throwMatDialogContentAlreadyAttachedError: any = (msg?: string) => {
	throw new Error(msg || 'MatDialog content already attached');
};
