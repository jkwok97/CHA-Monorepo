import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartItemSidebarRatingsRateComponent } from './home-summary-depth-chart-item-sidebar-ratings-rate.component';

describe('HomeSummaryDepthChartItemSidebarRatingsRateComponent', () => {
  let component: HomeSummaryDepthChartItemSidebarRatingsRateComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartItemSidebarRatingsRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartItemSidebarRatingsRateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HomeSummaryDepthChartItemSidebarRatingsRateComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
