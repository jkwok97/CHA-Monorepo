import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtSalariesEditComponent } from './player-mgmt-salaries-edit.component';

describe('PlayerMgmtSalariesEditComponent', () => {
  let component: PlayerMgmtSalariesEditComponent;
  let fixture: ComponentFixture<PlayerMgmtSalariesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtSalariesEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtSalariesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
