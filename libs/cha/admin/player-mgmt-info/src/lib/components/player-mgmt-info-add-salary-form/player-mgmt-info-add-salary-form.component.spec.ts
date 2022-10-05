import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtInfoAddSalaryFormComponent } from './player-mgmt-info-add-salary-form.component';

describe('PlayerMgmtInfoAddSalaryFormComponent', () => {
  let component: PlayerMgmtInfoAddSalaryFormComponent;
  let fixture: ComponentFixture<PlayerMgmtInfoAddSalaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtInfoAddSalaryFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtInfoAddSalaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
