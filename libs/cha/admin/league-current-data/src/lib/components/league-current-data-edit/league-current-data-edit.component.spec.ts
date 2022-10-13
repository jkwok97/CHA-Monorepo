import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCurrentDataEditComponent } from './league-current-data-edit.component';

describe('LeagueCurrentDataEditComponent', () => {
  let component: LeagueCurrentDataEditComponent;
  let fixture: ComponentFixture<LeagueCurrentDataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueCurrentDataEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueCurrentDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
