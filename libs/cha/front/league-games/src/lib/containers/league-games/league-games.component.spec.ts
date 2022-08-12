import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueGamesComponent } from './league-games.component';

describe('LeagueGamesComponent', () => {
  let component: LeagueGamesComponent;
  let fixture: ComponentFixture<LeagueGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueGamesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
