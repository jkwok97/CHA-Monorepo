import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSalariesRatingsBadgeComponent } from './league-salaries-ratings-badge.component';

describe('LeagueSalariesRatingsBadgeComponent', () => {
  let component: LeagueSalariesRatingsBadgeComponent;
  let fixture: ComponentFixture<LeagueSalariesRatingsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSalariesRatingsBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueSalariesRatingsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
