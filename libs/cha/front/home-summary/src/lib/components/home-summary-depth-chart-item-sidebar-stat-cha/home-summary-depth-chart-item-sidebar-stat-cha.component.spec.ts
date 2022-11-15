import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartItemSidebarStatChaComponent } from './home-summary-depth-chart-item-sidebar-stat-cha.component';

describe('HomeSummaryDepthChartItemSidebarStatChaComponent', () => {
  let component: HomeSummaryDepthChartItemSidebarStatChaComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartItemSidebarStatChaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartItemSidebarStatChaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HomeSummaryDepthChartItemSidebarStatChaComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
