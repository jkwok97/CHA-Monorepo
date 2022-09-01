import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPlayoffsFinalChampionCardComponent } from './games-playoffs-final-champion-card.component';

describe('GamesPlayoffsFinalChampionCardComponent', () => {
  let component: GamesPlayoffsFinalChampionCardComponent;
  let fixture: ComponentFixture<GamesPlayoffsFinalChampionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesPlayoffsFinalChampionCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesPlayoffsFinalChampionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
