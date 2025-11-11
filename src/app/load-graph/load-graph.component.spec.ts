import { waitForAsync as async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadGraphComponent } from './load-graph.component';

describe('LoadGraphComponent', () => {
  let component: LoadGraphComponent;
  let fixture: ComponentFixture<LoadGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ LoadGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
