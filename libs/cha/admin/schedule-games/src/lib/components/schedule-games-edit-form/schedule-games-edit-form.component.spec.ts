import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGamesEditFormComponent } from './schedule-games-edit-form.component';

describe('ScheduleGamesEditFormComponent', () => {
  let component: ScheduleGamesEditFormComponent;
  let fixture: ComponentFixture<ScheduleGamesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleGamesEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleGamesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
