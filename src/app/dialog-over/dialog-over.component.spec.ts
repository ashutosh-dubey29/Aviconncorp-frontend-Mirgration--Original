import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogOverComponent } from './dialog-over.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('DialogOverComponent', () => {
  let component: DialogOverComponent;
  let fixture: ComponentFixture<DialogOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DialogOverComponent, MatButtonModule, MatDialogModule, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
