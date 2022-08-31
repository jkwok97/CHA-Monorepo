import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsPlayerAllTableComponent } from './stats-player-all-table.component';

describe('StatsPlayerAllTableComponent', () => {
  let component: StatsPlayerAllTableComponent;
  let fixture: ComponentFixture<StatsPlayerAllTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsPlayerAllTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsPlayerAllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
