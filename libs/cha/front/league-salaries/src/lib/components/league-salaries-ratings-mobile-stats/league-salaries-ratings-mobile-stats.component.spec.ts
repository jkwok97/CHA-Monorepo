import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSalariesRatingsMobileStatsComponent } from './league-salaries-ratings-mobile-stats.component';

describe('LeagueSalariesRatingsMobileStatsComponent', () => {
  let component: LeagueSalariesRatingsMobileStatsComponent;
  let fixture: ComponentFixture<LeagueSalariesRatingsMobileStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSalariesRatingsMobileStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      LeagueSalariesRatingsMobileStatsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
