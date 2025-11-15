import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeteringComponent } from './submetering.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('SubmeteringComponent', () => {
  let component: SubmeteringComponent;
  let fixture: ComponentFixture<SubmeteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SubmeteringComponent, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
