import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartPositionComponent } from './home-summary-depth-chart-position.component';

describe('HomeSummaryDepthChartPositionComponent', () => {
  let component: HomeSummaryDepthChartPositionComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartPositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSummaryDepthChartPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
