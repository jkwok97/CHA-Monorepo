import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlStatsSkaterTableComponent } from './nhl-stats-skater-table.component';

describe('NhlStatsSkaterTableComponent', () => {
  let component: NhlStatsSkaterTableComponent;
  let fixture: ComponentFixture<NhlStatsSkaterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NhlStatsSkaterTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NhlStatsSkaterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
