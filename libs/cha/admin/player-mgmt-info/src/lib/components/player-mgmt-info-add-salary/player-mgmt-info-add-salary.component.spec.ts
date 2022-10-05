import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoAddSalaryComponent } from './player-mgmt-info-add-salary.component';

describe('PlayerMgmtInfoAddSalaryComponent', () => {
  let component: PlayerMgmtInfoAddSalaryComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoAddSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoAddSalaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoAddSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
