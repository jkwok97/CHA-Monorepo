import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPlayoffsTeamAvatarComponent } from './games-playoffs-team-avatar.component';

describe('GamesPlayoffsTeamAvatarComponent', () => {
  let component: GamesPlayoffsTeamAvatarComponent;
  let fixture: ComponentFixture<GamesPlayoffsTeamAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesPlayoffsTeamAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesPlayoffsTeamAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
