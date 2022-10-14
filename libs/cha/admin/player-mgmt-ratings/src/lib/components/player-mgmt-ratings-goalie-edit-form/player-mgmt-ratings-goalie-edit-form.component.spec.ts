import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtRatingsGoalieEditFormComponent } from './player-mgmt-ratings-goalie-edit-form.component';

describe('PlayerMgmtRatingsGoalieEditFormComponent', () => {
  let component: PlayerMgmtRatingsGoalieEditFormComponent;
  let fixture: ComponentFixture<PlayerMgmtRatingsGoalieEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtRatingsGoalieEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtRatingsGoalieEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
