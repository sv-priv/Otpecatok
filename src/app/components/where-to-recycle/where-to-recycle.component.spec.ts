import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToRecycleComponent } from './where-to-recycle.component';

describe('WhereToRecycleComponent', () => {
  let component: WhereToRecycleComponent;
  let fixture: ComponentFixture<WhereToRecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereToRecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToRecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
