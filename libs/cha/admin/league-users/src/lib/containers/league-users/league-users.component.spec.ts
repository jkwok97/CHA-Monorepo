import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueUsersComponent } from './league-users.component';

describe('LeagueUsersComponent', () => {
  let component: LeagueUsersComponent;
  let fixture: ComponentFixture<LeagueUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
