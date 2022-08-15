import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAwardsComponent } from './league-awards.component';

describe('LeagueAwardsComponent', () => {
  let component: LeagueAwardsComponent;
  let fixture: ComponentFixture<LeagueAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueAwardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
