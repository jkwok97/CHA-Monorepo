import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSalariesRatingsSidebarComponent } from './league-salaries-ratings-sidebar.component';

describe('LeagueSalariesRatingsSidebarComponent', () => {
  let component: LeagueSalariesRatingsSidebarComponent;
  let fixture: ComponentFixture<LeagueSalariesRatingsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueSalariesRatingsSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueSalariesRatingsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
