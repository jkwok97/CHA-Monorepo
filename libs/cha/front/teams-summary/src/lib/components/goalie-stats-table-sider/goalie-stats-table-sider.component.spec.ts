import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalieStatsTableSiderComponent } from './goalie-stats-table-sider.component';

describe('GoalieStatsTableSiderComponent', () => {
  let component: GoalieStatsTableSiderComponent;
  let fixture: ComponentFixture<GoalieStatsTableSiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalieStatsTableSiderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalieStatsTableSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
