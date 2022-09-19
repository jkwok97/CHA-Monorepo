import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSalariesRatingsExpansionComponent } from './league-salaries-ratings-expansion.component';

describe('LeagueSalariesRatingsExpansionComponent', () => {
  let component: LeagueSalariesRatingsExpansionComponent;
  let fixture: ComponentFixture<LeagueSalariesRatingsExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSalariesRatingsExpansionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueSalariesRatingsExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
