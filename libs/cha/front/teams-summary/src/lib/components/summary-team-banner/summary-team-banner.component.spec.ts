import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTeamBannerComponent } from './summary-team-banner.component';

describe('SummaryTeamBannerComponent', () => {
  let component: SummaryTeamBannerComponent;
  let fixture: ComponentFixture<SummaryTeamBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryTeamBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryTeamBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
