import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueWaiversComponent } from './league-waivers.component';

describe('LeagueWaiversComponent', () => {
  let component: LeagueWaiversComponent;
  let fixture: ComponentFixture<LeagueWaiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeagueWaiversComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueWaiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
