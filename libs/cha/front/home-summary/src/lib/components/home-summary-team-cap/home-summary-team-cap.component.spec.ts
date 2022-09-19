import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryTeamCapComponent } from './home-summary-team-cap.component';

describe('HomeSummaryTeamCapComponent', () => {
  let component: HomeSummaryTeamCapComponent;
  let fixture: ComponentFixture<HomeSummaryTeamCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSummaryTeamCapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSummaryTeamCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
