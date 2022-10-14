import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtRatingsPlayerEditComponent } from './player-mgmt-ratings-player-edit.component';

describe('PlayerMgmtRatingsPlayerEditComponent', () => {
  let component: PlayerMgmtRatingsPlayerEditComponent;
  let fixture: ComponentFixture<PlayerMgmtRatingsPlayerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtRatingsPlayerEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtRatingsPlayerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
