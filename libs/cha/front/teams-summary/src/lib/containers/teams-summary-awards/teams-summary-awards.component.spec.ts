import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSummaryAwardsComponent } from './teams-summary-awards.component';

describe('TeamsSummaryAwardsComponent', () => {
  let component: TeamsSummaryAwardsComponent;
  let fixture: ComponentFixture<TeamsSummaryAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsSummaryAwardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsSummaryAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
