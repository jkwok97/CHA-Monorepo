import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGamesEditComponent } from './schedule-games-edit.component';

describe('ScheduleGamesEditComponent', () => {
  let component: ScheduleGamesEditComponent;
  let fixture: ComponentFixture<ScheduleGamesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleGamesEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleGamesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
