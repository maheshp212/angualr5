import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormscontComponent } from './formscont.component';

describe('FormscontComponent', () => {
  let component: FormscontComponent;
  let fixture: ComponentFixture<FormscontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormscontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormscontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
