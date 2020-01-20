import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerGameComponent } from './poker-game.component';

describe('PokerGameComponent', () => {
  let component: PokerGameComponent;
  let fixture: ComponentFixture<PokerGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
