import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartItemSidebarStatsComponent } from './depth-chart-item-sidebar-stats.component';

describe('DepthChartItemSidebarStatsComponent', () => {
  let component: DepthChartItemSidebarStatsComponent;
  let fixture: ComponentFixture<DepthChartItemSidebarStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartItemSidebarStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthChartItemSidebarStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
