import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSummaryFutureDepthComponent } from './teams-summary-future-depth.component';

describe('TeamsSummaryFutureDepthComponent', () => {
  let component: TeamsSummaryFutureDepthComponent;
  let fixture: ComponentFixture<TeamsSummaryFutureDepthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsSummaryFutureDepthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsSummaryFutureDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
