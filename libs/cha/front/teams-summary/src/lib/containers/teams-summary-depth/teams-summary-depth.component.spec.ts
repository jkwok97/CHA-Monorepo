import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSummaryDepthComponent } from './teams-summary-depth.component';

describe('TeamsSummaryDepthComponent', () => {
  let component: TeamsSummaryDepthComponent;
  let fixture: ComponentFixture<TeamsSummaryDepthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsSummaryDepthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsSummaryDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
