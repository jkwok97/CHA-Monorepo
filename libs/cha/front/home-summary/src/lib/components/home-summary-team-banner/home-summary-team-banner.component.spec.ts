import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryTeamBannerComponent } from './home-summary-team-banner.component';

describe('HomeSummaryTeamBannerComponent', () => {
  let component: HomeSummaryTeamBannerComponent;
  let fixture: ComponentFixture<HomeSummaryTeamBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryTeamBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSummaryTeamBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
