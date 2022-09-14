import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTeamsTableComponent } from './history-teams-table.component';

describe('HistoryTeamsTableComponent', () => {
  let component: HistoryTeamsTableComponent;
  let fixture: ComponentFixture<HistoryTeamsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryTeamsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryTeamsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
