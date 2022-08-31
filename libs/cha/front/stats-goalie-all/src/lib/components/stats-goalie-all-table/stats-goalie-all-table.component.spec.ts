import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGoalieAllTableComponent } from './stats-goalie-all-table.component';

describe('StatsGoalieAllTableComponent', () => {
  let component: StatsGoalieAllTableComponent;
  let fixture: ComponentFixture<StatsGoalieAllTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsGoalieAllTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsGoalieAllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
