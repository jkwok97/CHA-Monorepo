import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartItemSidebarStatsNhlComponent } from './depth-chart-item-sidebar-stats-nhl.component';

describe('DepthChartItemSidebarStatsNhlComponent', () => {
  let component: DepthChartItemSidebarStatsNhlComponent;
  let fixture: ComponentFixture<DepthChartItemSidebarStatsNhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartItemSidebarStatsNhlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthChartItemSidebarStatsNhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
