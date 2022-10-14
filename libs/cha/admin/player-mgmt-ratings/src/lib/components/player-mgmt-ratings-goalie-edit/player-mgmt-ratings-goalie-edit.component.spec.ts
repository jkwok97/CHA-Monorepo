import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtRatingsGoalieEditComponent } from './player-mgmt-ratings-goalie-edit.component';

describe('PlayerMgmtRatingsGoalieEditComponent', () => {
  let component: PlayerMgmtRatingsGoalieEditComponent;
  let fixture: ComponentFixture<PlayerMgmtRatingsGoalieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtRatingsGoalieEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtRatingsGoalieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
