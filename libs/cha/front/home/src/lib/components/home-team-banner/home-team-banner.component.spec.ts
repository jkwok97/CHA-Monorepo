import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeamBannerComponent } from './home-team-banner.component';

describe('HomeSummaryTeamBannerComponent', () => {
  let component: HomeTeamBannerComponent;
  let fixture: ComponentFixture<HomeTeamBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTeamBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTeamBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
