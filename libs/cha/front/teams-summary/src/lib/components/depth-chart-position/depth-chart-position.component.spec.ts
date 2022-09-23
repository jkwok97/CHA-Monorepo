import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartPositionComponent } from './depth-chart-position.component';

describe('DepthChartPositionComponent', () => {
  let component: DepthChartPositionComponent;
  let fixture: ComponentFixture<DepthChartPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartPositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthChartPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
