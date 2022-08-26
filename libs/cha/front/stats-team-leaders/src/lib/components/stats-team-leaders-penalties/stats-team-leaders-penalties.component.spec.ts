import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersPenaltiesComponent } from './stats-team-leaders-penalties.component';

describe('StatsTeamLeadersPenaltiesComponent', () => {
  let component: StatsTeamLeadersPenaltiesComponent;
  let fixture: ComponentFixture<StatsTeamLeadersPenaltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersPenaltiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersPenaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
