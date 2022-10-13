import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCurrentDataEditFormComponent } from './league-current-data-edit-form.component';

describe('LeagueCurrentDataEditFormComponent', () => {
  let component: LeagueCurrentDataEditFormComponent;
  let fixture: ComponentFixture<LeagueCurrentDataEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueCurrentDataEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueCurrentDataEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
