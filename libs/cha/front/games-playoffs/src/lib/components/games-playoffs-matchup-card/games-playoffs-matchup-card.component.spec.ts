import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPlayoffsMatchupCardComponent } from './games-playoffs-matchup-card.component';

describe('GamesPlayoffsMatchupCardComponent', () => {
  let component: GamesPlayoffsMatchupCardComponent;
  let fixture: ComponentFixture<GamesPlayoffsMatchupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesPlayoffsMatchupCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesPlayoffsMatchupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
