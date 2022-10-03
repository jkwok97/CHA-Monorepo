import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTeamsEditComponent } from './league-teams-edit.component';

describe('LeagueTeamsEditComponent', () => {
  let component: LeagueTeamsEditComponent;
  let fixture: ComponentFixture<LeagueTeamsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueTeamsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueTeamsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
