import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAwardsEditFormComponent } from './league-awards-edit-form.component';

describe('LeagueAwardsEditFormComponent', () => {
  let component: LeagueAwardsEditFormComponent;
  let fixture: ComponentFixture<LeagueAwardsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueAwardsEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueAwardsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
