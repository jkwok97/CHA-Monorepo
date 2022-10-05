import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMgmtSalariesAddFormComponent } from './player-mgmt-salaries-add-form.component';

describe('PlayerMgmtSalariesAddFormComponent', () => {
  let component: PlayerMgmtSalariesAddFormComponent;
  let fixture: ComponentFixture<PlayerMgmtSalariesAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerMgmtSalariesAddFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMgmtSalariesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
