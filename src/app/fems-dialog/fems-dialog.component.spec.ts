import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FemsDialogComponent } from './fems-dialog.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('FemsDialogComponent', () => {
  let component: FemsDialogComponent;
  let fixture: ComponentFixture<FemsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FemsDialogComponent, MatDialogModule, MatButtonModule, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
