import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersShotsComponent } from './stats-team-leaders-passing.component';

describe('StatsTeamLeadersDifferentialsComponent', () => {
  let component: StatsTeamLeadersShotsComponent;
  let fixture: ComponentFixture<StatsTeamLeadersShotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersShotsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
