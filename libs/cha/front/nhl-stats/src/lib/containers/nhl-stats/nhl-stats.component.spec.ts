import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlStatsComponent } from './nhl-stats.component';

describe('NhlStatsComponent', () => {
  let component: NhlStatsComponent;
  let fixture: ComponentFixture<NhlStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NhlStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NhlStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
