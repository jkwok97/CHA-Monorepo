import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueConferencesTableComponent } from './league-conferences-table.component';

describe('LeagueConferencesTableComponent', () => {
  let component: LeagueConferencesTableComponent;
  let fixture: ComponentFixture<LeagueConferencesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueConferencesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueConferencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
