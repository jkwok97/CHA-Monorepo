import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueWaiversTableComponent } from './league-waivers-table.component';

describe('LeagueWaiversTableComponent', () => {
  let component: LeagueWaiversTableComponent;
  let fixture: ComponentFixture<LeagueWaiversTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueWaiversTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueWaiversTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
