import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthChartItemSidebarComponent } from './depth-chart-item-sidebar.component';

describe('DepthChartItemSidebarComponent', () => {
  let component: DepthChartItemSidebarComponent;
  let fixture: ComponentFixture<DepthChartItemSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepthChartItemSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepthChartItemSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
