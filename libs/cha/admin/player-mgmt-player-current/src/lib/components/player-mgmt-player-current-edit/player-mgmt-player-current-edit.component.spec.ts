import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtPlayerCurrentEditComponent } from './player-mgmt-player-current-edit.component';

describe('PlayerMgmtPlayerCurrentEditComponent', () => {
  let component: PlayerMgmtPlayerCurrentEditComponent;
  let fixture: ComponentFixture<PlayerMgmtPlayerCurrentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtPlayerCurrentEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtPlayerCurrentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
