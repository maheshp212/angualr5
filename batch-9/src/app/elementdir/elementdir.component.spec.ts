import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementdirComponent } from './elementdir.component';

describe('ElementdirComponent', () => {
  let component: ElementdirComponent;
  let fixture: ComponentFixture<ElementdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
