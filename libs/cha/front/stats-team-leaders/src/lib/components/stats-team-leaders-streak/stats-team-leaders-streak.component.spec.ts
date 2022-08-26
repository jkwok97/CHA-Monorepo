import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersStreakComponent } from './stats-team-leaders-streak.component';

describe('StatsTeamLeadersStreakComponent', () => {
  let component: StatsTeamLeadersStreakComponent;
  let fixture: ComponentFixture<StatsTeamLeadersStreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersStreakComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersStreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
