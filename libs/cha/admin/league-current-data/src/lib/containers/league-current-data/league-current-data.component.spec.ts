import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCurrentDataComponent } from './league-current-data.component';

describe('LeagueCurrentDataComponent', () => {
  let component: LeagueCurrentDataComponent;
  let fixture: ComponentFixture<LeagueCurrentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueCurrentDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueCurrentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
