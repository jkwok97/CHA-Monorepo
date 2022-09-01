import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPlayoffsMatchupFinalCardComponent } from './games-playoffs-matchup-final-card.component';

describe('GamesPlayoffsMatchupFinalCardComponent', () => {
  let component: GamesPlayoffsMatchupFinalCardComponent;
  let fixture: ComponentFixture<GamesPlayoffsMatchupFinalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesPlayoffsMatchupFinalCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesPlayoffsMatchupFinalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
