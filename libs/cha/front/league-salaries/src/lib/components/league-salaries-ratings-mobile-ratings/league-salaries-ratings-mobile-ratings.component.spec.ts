import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSalariesRatingsMobileRatingsComponent } from './league-salaries-ratings-mobile-ratings.component';

describe('LeagueSalariesRatingsMobileRatingsComponent', () => {
  let component: LeagueSalariesRatingsMobileRatingsComponent;
  let fixture: ComponentFixture<LeagueSalariesRatingsMobileRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSalariesRatingsMobileRatingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      LeagueSalariesRatingsMobileRatingsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
