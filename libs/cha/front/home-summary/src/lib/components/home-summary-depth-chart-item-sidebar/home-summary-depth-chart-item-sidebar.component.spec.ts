import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartItemSidebarComponent } from './home-summary-depth-chart-item-sidebar.component';

describe('HomeSummaryDepthChartItemSidebarComponent', () => {
  let component: HomeSummaryDepthChartItemSidebarComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartItemSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartItemSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HomeSummaryDepthChartItemSidebarComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
