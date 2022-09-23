import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTeamBannerCapComponent } from './summary-team-banner-cap.component';

describe('SummaryTeamBannerCapComponent', () => {
  let component: SummaryTeamBannerCapComponent;
  let fixture: ComponentFixture<SummaryTeamBannerCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryTeamBannerCapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryTeamBannerCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
