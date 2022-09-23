import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartItemSidebarRatingsComponent } from './depth-chart-item-sidebar-ratings.component';

describe('DepthChartItemSidebarRatingsComponent', () => {
  let component: DepthChartItemSidebarRatingsComponent;
  let fixture: ComponentFixture<DepthChartItemSidebarRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartItemSidebarRatingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthChartItemSidebarRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
