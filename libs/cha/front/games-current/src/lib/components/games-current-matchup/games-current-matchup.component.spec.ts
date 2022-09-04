import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCurrentMatchupComponent } from './games-current-matchup.component';

describe('GamesCurrentMatchupComponent', () => {
  let component: GamesCurrentMatchupComponent;
  let fixture: ComponentFixture<GamesCurrentMatchupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesCurrentMatchupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesCurrentMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
