import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComingDashComponent } from './coming-dash.component';
import { COMMON_TEST_IMPORTS, COMMON_TEST_PROVIDERS } from '../testing/test-helpers';

describe('ComingDashComponent', () => {
  let component: ComingDashComponent;
  let fixture: ComponentFixture<ComingDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ComingDashComponent, ...COMMON_TEST_IMPORTS ],
      providers: [...COMMON_TEST_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
