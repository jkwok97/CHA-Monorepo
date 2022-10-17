import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtGoalieCurrentEditFormComponent } from './player-mgmt-goalie-current-edit-form.component';

describe('PlayerMgmtGoalieCurrentEditFormComponent', () => {
  let component: PlayerMgmtGoalieCurrentEditFormComponent;
  let fixture: ComponentFixture<PlayerMgmtGoalieCurrentEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtGoalieCurrentEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtGoalieCurrentEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
