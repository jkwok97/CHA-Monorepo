import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartItemSidebarStatsChaComponent } from './depth-chart-item-sidebar-stats-cha.component';

describe('DepthChartItemSidebarStatsChaComponent', () => {
  let component: DepthChartItemSidebarStatsChaComponent;
  let fixture: ComponentFixture<DepthChartItemSidebarStatsChaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartItemSidebarStatsChaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthChartItemSidebarStatsChaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
