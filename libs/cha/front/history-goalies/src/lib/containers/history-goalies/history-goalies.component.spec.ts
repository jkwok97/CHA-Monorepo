import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGoaliesComponent } from './history-goalies.component';

describe('HistoryGoaliesComponent', () => {
  let component: HistoryGoaliesComponent;
  let fixture: ComponentFixture<HistoryGoaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryGoaliesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryGoaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
