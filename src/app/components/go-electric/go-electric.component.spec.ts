import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoElectricComponent } from './go-electric.component';

describe('GoElectricComponent', () => {
  let component: GoElectricComponent;
  let fixture: ComponentFixture<GoElectricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoElectricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoElectricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
