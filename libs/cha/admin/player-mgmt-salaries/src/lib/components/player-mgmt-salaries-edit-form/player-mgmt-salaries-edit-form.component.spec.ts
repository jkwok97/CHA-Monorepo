import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtSalariesEditFormComponent } from './player-mgmt-salaries-edit-form.component';

describe('PlayerMgmtSalariesEditFormComponent', () => {
  let component: PlayerMgmtSalariesEditFormComponent;
  let fixture: ComponentFixture<PlayerMgmtSalariesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtSalariesEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtSalariesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
