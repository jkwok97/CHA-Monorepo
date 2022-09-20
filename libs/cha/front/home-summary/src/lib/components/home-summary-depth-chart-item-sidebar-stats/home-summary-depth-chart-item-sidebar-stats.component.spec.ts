import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartItemSidebarStatsComponent } from './home-summary-depth-chart-item-sidebar-stats.component';

describe('HomeSummaryDepthChartItemSidebarStatsComponent', () => {
  let component: HomeSummaryDepthChartItemSidebarStatsComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartItemSidebarStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartItemSidebarStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HomeSummaryDepthChartItemSidebarStatsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
