import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCurrentTeamCardComponent } from './games-current-team-card.component';

describe('GamesCurrentTeamCardComponent', () => {
  let component: GamesCurrentTeamCardComponent;
  let fixture: ComponentFixture<GamesCurrentTeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesCurrentTeamCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesCurrentTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
