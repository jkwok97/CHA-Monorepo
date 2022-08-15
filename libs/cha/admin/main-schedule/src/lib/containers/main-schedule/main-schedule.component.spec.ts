import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScheduleComponent } from './main-schedule.component';

describe('MainScheduleComponent', () => {
  let component: MainScheduleComponent;
  let fixture: ComponentFixture<MainScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainScheduleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
