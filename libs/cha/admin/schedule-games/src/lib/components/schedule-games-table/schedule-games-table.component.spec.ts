import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGamesTableComponent } from './schedule-games-table.component';

describe('ScheduleGamesTableComponent', () => {
  let component: ScheduleGamesTableComponent;
  let fixture: ComponentFixture<ScheduleGamesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleGamesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleGamesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
