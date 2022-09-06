import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTradesTeamCardComponent } from './league-trades-team-card.component';

describe('LeagueTradesTeamCardComponent', () => {
  let component: LeagueTradesTeamCardComponent;
  let fixture: ComponentFixture<LeagueTradesTeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueTradesTeamCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueTradesTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
