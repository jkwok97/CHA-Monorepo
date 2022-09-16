import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGoaliesTableComponent } from './history-goalies-table.component';

describe('HistoryGoaliesTableComponent', () => {
  let component: HistoryGoaliesTableComponent;
  let fixture: ComponentFixture<HistoryGoaliesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryGoaliesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryGoaliesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
