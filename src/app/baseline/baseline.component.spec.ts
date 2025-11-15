import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineComponent } from './baseline.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('BaselineComponent', () => {
  let component: BaselineComponent;
  let fixture: ComponentFixture<BaselineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BaselineComponent, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
