import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export const COMMON_TEST_IMPORTS = [HttpClientTestingModule];

export const COMMON_TEST_PROVIDERS = [
  { provide: MatDialogRef, useValue: {} },
  { provide: MAT_DIALOG_DATA, useValue: {} }
];

export default {
  COMMON_TEST_IMPORTS,
  COMMON_TEST_PROVIDERS
};
