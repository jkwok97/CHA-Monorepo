import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtRatingsPlayerEditFormComponent } from './player-mgmt-ratings-player-edit-form.component';

describe('PlayerMgmtRatingsPlayerEditFormComponent', () => {
  let component: PlayerMgmtRatingsPlayerEditFormComponent;
  let fixture: ComponentFixture<PlayerMgmtRatingsPlayerEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtRatingsPlayerEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtRatingsPlayerEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
