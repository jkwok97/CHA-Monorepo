import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartItemSidebarRatingsNhlComponent } from './depth-chart-item-sidebar-ratings-nhl.component';

describe('DepthChartItemSidebarRatingsNhlComponent', () => {
  let component: DepthChartItemSidebarRatingsNhlComponent;
  let fixture: ComponentFixture<DepthChartItemSidebarRatingsNhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartItemSidebarRatingsNhlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthChartItemSidebarRatingsNhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
