import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtPlayerCurrentEditFormComponent } from './player-mgmt-player-current-edit-form.component';

describe('PlayerMgmtPlayerCurrentEditFormComponent', () => {
  let component: PlayerMgmtPlayerCurrentEditFormComponent;
  let fixture: ComponentFixture<PlayerMgmtPlayerCurrentEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtPlayerCurrentEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtPlayerCurrentEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
