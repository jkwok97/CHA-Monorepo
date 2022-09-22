import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSummaryGoaliesComponent } from './teams-summary-goalies.component';

describe('TeamsSummaryGoaliesComponent', () => {
  let component: TeamsSummaryGoaliesComponent;
  let fixture: ComponentFixture<TeamsSummaryGoaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsSummaryGoaliesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsSummaryGoaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
