import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamLeadersComponent } from './stats-team-leaders.component';

describe('StatsTeamLeadersComponent', () => {
  let component: StatsTeamLeadersComponent;
  let fixture: ComponentFixture<StatsTeamLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamLeadersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
