import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSalariesRatingsTableComponent } from './league-salaries-ratings-table.component';

describe('LeagueSalariesRatingsTableComponent', () => {
  let component: LeagueSalariesRatingsTableComponent;
  let fixture: ComponentFixture<LeagueSalariesRatingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSalariesRatingsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueSalariesRatingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
