import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlStatsGoalieTableComponent } from './nhl-stats-goalie-table.component';

describe('NhlStatsGoalieTableComponent', () => {
  let component: NhlStatsGoalieTableComponent;
  let fixture: ComponentFixture<NhlStatsGoalieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NhlStatsGoalieTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NhlStatsGoalieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
