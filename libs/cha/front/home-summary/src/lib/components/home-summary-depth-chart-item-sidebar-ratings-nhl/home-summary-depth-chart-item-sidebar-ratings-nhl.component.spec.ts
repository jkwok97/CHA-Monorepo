import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartItemSidebarRatingsNhlComponent } from './home-summary-depth-chart-item-sidebar-ratings-nhl.component';

describe('HomeSummaryDepthChartItemSidebarRatingsNhlComponent', () => {
  let component: HomeSummaryDepthChartItemSidebarRatingsNhlComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartItemSidebarRatingsNhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartItemSidebarRatingsNhlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HomeSummaryDepthChartItemSidebarRatingsNhlComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
