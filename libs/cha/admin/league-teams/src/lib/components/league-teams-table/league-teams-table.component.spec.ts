import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTeamsTableComponent } from './league-teams-table.component';

describe('LeagueTeamsTableComponent', () => {
  let component: LeagueTeamsTableComponent;
  let fixture: ComponentFixture<LeagueTeamsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueTeamsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueTeamsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
