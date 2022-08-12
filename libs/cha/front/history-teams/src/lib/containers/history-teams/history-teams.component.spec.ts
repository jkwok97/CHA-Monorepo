import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTeamsComponent } from './history-teams.component';

describe('HistoryTeamsComponent', () => {
  let component: HistoryTeamsComponent;
  let fixture: ComponentFixture<HistoryTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryTeamsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
