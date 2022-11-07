import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAwardsTableComponent } from './league-awards-table.component';

describe('LeagueAwardsTableComponent', () => {
  let component: LeagueAwardsTableComponent;
  let fixture: ComponentFixture<LeagueAwardsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueAwardsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueAwardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
