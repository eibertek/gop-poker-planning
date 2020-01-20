import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPokerPlanningComponent } from './new-poker-planning.component';

describe('NewPokerPlanningComponent', () => {
  let component: NewPokerPlanningComponent;
  let fixture: ComponentFixture<NewPokerPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPokerPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPokerPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
