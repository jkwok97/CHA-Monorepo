import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTeamBannerRecordComponent } from './summary-team-banner-record.component';

describe('SummaryTeamBannerRecordComponent', () => {
  let component: SummaryTeamBannerRecordComponent;
  let fixture: ComponentFixture<SummaryTeamBannerRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryTeamBannerRecordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryTeamBannerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
