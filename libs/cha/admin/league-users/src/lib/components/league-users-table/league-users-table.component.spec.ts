import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueUsersTableComponent } from './league-users-table.component';

describe('LeagueUsersTableComponent', () => {
  let component: LeagueUsersTableComponent;
  let fixture: ComponentFixture<LeagueUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueUsersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
