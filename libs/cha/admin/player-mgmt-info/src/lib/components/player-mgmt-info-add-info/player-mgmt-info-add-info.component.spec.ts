import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoAddInfoComponent } from './player-mgmt-info-add-info.component';

describe('PlayerMgmtInfoAddInfoComponent', () => {
  let component: PlayerMgmtInfoAddInfoComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoAddInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoAddInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
