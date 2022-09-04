import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCurrentDayComponent } from './games-current-day.component';

describe('GamesCurrentDayComponent', () => {
  let component: GamesCurrentDayComponent;
  let fixture: ComponentFixture<GamesCurrentDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesCurrentDayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesCurrentDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
