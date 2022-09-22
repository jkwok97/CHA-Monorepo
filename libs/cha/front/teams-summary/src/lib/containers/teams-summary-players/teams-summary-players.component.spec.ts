import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSummaryPlayersComponent } from './teams-summary-players.component';

describe('TeamsSummaryPlayersComponent', () => {
  let component: TeamsSummaryPlayersComponent;
  let fixture: ComponentFixture<TeamsSummaryPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsSummaryPlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsSummaryPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
