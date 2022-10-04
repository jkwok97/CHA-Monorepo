import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoEditComponent } from './player-mgmt-info-edit.component';

describe('PlayerMgmtInfoEditComponent', () => {
  let component: PlayerMgmtInfoEditComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
