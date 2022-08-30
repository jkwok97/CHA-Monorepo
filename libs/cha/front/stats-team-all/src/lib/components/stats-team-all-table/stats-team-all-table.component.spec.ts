import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTeamAllTableComponent } from './stats-team-all-table.component';

describe('StatsTeamAllTableComponent', () => {
  let component: StatsTeamAllTableComponent;
  let fixture: ComponentFixture<StatsTeamAllTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsTeamAllTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsTeamAllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
