import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryTeamRecordComponent } from './home-summary-team-record.component';

describe('HomeSummaryTeamRecordComponent', () => {
  let component: HomeSummaryTeamRecordComponent;
  let fixture: ComponentFixture<HomeSummaryTeamRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryTeamRecordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSummaryTeamRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
