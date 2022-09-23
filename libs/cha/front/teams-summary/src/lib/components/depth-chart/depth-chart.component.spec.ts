import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartComponent } from './depth-chart.component';

describe('DepthChartComponent', () => {
  let component: DepthChartComponent;
  let fixture: ComponentFixture<DepthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
