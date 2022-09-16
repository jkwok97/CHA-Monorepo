import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryDepthChartComponent } from './home-summary-depth-chart.component';

describe('HomeSummaryDepthChartComponent', () => {
  let component: HomeSummaryDepthChartComponent;
  let fixture: ComponentFixture<HomeSummaryDepthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryDepthChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSummaryDepthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
