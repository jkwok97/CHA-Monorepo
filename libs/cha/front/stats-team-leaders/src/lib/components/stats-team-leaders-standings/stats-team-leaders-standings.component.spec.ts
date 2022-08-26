import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersStandingsComponent } from './stats-team-leaders-standings.component';

describe('StatsTeamLeadersStandingsComponent', () => {
  let component: StatsTeamLeadersStandingsComponent;
  let fixture: ComponentFixture<StatsTeamLeadersStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersStandingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
