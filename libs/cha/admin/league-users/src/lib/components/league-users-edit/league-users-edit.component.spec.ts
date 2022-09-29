import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueUsersEditComponent } from './league-users-edit.component';

describe('LeagueUsersEditComponent', () => {
  let component: LeagueUsersEditComponent;
  let fixture: ComponentFixture<LeagueUsersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueUsersEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
