import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSummaryTeamComponent } from './teams-summary-team.component';

describe('TeamsSummaryTeamComponent', () => {
  let component: TeamsSummaryTeamComponent;
  let fixture: ComponentFixture<TeamsSummaryTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsSummaryTeamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsSummaryTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
