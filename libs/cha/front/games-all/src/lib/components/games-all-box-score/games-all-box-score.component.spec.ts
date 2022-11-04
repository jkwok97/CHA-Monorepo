import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAllBoxScoreComponent } from './games-all-box-score.component';

describe('GamesAllBoxScoreComponent', () => {
  let component: GamesAllBoxScoreComponent;
  let fixture: ComponentFixture<GamesAllBoxScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesAllBoxScoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesAllBoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
