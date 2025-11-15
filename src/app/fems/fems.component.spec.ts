import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

import { FemsComponent } from './fems.component';

describe('FemsComponent', () => {
  let component: FemsComponent;
  let fixture: ComponentFixture<FemsComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ FemsComponent, MatTableModule, MatPaginatorModule, MatSortModule, ...COMMON_TEST_IMPORTS ],
        providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
