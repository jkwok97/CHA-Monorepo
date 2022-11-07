import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAwardsEditComponent } from './league-awards-edit.component';

describe('LeagueAwardsEditComponent', () => {
  let component: LeagueAwardsEditComponent;
  let fixture: ComponentFixture<LeagueAwardsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueAwardsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueAwardsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
