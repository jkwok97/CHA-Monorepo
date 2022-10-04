import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoEditFormComponent } from './player-mgmt-info-edit-form.component';

describe('PlayerMgmtInfoEditFormComponent', () => {
  let component: PlayerMgmtInfoEditFormComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
