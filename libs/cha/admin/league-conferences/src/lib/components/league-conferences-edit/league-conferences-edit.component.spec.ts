import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueConferencesEditComponent } from './league-conferences-edit.component';

describe('LeagueConferencesEditComponent', () => {
  let component: LeagueConferencesEditComponent;
  let fixture: ComponentFixture<LeagueConferencesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueConferencesEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueConferencesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
