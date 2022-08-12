import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueRatingsComponent } from './league-ratings.component';

describe('LeagueRatingsComponent', () => {
  let component: LeagueRatingsComponent;
  let fixture: ComponentFixture<LeagueRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueRatingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
