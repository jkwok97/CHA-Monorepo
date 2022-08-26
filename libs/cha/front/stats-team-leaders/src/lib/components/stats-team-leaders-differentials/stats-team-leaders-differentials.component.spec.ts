import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersDifferentialsComponent } from './stats-team-leaders-differentials.component';

describe('StatsTeamLeadersDifferentialsComponent', () => {
  let component: StatsTeamLeadersDifferentialsComponent;
  let fixture: ComponentFixture<StatsTeamLeadersDifferentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersDifferentialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersDifferentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
