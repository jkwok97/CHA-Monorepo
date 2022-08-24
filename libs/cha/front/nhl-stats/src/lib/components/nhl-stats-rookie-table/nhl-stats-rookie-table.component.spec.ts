import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlStatsRookieTableComponent } from './nhl-stats-rookie-table.component';

describe('NhlStatsRookieTableComponent', () => {
  let component: NhlStatsRookieTableComponent;
  let fixture: ComponentFixture<NhlStatsRookieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NhlStatsRookieTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NhlStatsRookieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
