import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersFaceoffsComponent } from './stats-team-leaders-faceoffs.component';

describe('StatsTeamLeadersDifferentialsComponent', () => {
  let component: StatsTeamLeadersFaceoffsComponent;
  let fixture: ComponentFixture<StatsTeamLeadersFaceoffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersFaceoffsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersFaceoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
