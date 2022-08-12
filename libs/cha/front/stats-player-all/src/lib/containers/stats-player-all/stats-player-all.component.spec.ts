import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPlayerAllComponent } from './stats-player-all.component';

describe('StatsPlayerAllComponent', () => {
  let component: StatsPlayerAllComponent;
  let fixture: ComponentFixture<StatsPlayerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsPlayerAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsPlayerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
