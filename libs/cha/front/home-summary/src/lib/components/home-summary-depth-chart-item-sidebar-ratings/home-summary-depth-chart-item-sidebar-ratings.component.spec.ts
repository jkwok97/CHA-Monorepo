import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartItemSidebarRatingsComponent } from './home-summary-depth-chart-item-sidebar-ratings.component';

describe('HomeSummaryDepthChartItemSidebarRatingsComponent', () => {
  let component: HomeSummaryDepthChartItemSidebarRatingsComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartItemSidebarRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartItemSidebarRatingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HomeSummaryDepthChartItemSidebarRatingsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
