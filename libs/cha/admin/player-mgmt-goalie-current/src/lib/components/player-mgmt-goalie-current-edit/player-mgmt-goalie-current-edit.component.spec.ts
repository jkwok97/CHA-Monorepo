import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtGoalieCurrentEditComponent } from './player-mgmt-goalie-current-edit.component';

describe('PlayerMgmtGoalieCurrentEditComponent', () => {
  let component: PlayerMgmtGoalieCurrentEditComponent;
  let fixture: ComponentFixture<PlayerMgmtGoalieCurrentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtGoalieCurrentEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtGoalieCurrentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
