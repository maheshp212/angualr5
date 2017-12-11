import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifcyclesComponent } from './lifcycles.component';

describe('LifcyclesComponent', () => {
  let component: LifcyclesComponent;
  let fixture: ComponentFixture<LifcyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifcyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
