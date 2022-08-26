import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersTableComponent } from './stats-team-leaders-table.component';

describe('StatsTeamLeadersTableComponent', () => {
  let component: StatsTeamLeadersTableComponent;
  let fixture: ComponentFixture<StatsTeamLeadersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
