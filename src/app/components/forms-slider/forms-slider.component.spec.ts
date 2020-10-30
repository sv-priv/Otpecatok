import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSliderComponent } from './forms-slider.component';

describe('FormsSliderComponent', () => {
  let component: FormsSliderComponent;
  let fixture: ComponentFixture<FormsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
