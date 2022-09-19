import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSalariesRatingsMobileSalaryComponent } from './league-salaries-ratings-mobile-salary.component';

describe('LeagueSalariesRatingsMobileSalaryComponent', () => {
  let component: LeagueSalariesRatingsMobileSalaryComponent;
  let fixture: ComponentFixture<LeagueSalariesRatingsMobileSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSalariesRatingsMobileSalaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      LeagueSalariesRatingsMobileSalaryComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
