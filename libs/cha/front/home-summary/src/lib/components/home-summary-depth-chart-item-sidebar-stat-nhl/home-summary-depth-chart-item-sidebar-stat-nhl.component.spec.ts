import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartItemSidebarStatNhlComponent } from './home-summary-depth-chart-item-sidebar-stat-nhl.component';

describe('HomeSummaryDepthChartItemSidebarStatNhlComponent', () => {
  let component: HomeSummaryDepthChartItemSidebarStatNhlComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartItemSidebarStatNhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartItemSidebarStatNhlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HomeSummaryDepthChartItemSidebarStatNhlComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
