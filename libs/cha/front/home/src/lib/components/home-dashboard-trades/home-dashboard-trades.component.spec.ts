import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardTradesComponent } from './home-dashboard-trades.component';

describe('HomeSummaryTeamBannerComponent', () => {
  let component: HomeDashboardTradesComponent;
  let fixture: ComponentFixture<HomeDashboardTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDashboardTradesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDashboardTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
