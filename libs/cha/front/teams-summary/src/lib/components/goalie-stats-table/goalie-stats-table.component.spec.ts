import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalieStatsTableComponent } from './goalie-stats-table.component';

describe('GoalieStatsTableComponent', () => {
  let component: GoalieStatsTableComponent;
  let fixture: ComponentFixture<GoalieStatsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalieStatsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalieStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
