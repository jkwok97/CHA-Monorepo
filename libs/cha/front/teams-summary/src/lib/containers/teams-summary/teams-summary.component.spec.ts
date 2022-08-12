import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSummaryComponent } from './teams-summary.component';

describe('TeamsSummaryComponent', () => {
  let component: TeamsSummaryComponent;
  let fixture: ComponentFixture<TeamsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
