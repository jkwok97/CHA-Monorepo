import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartItemSidebarRatingsRateComponent } from './depth-chart-item-sidebar-ratings-rate.component';

describe('DepthChartItemSidebarRatingsRateComponent', () => {
  let component: DepthChartItemSidebarRatingsRateComponent;
  let fixture: ComponentFixture<DepthChartItemSidebarRatingsRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartItemSidebarRatingsRateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      DepthChartItemSidebarRatingsRateComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
