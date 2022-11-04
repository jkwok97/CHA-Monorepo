import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCurrentBoxScoreComponent } from './games-current-box-score.component';

describe('GamesCurrentBoxScoreComponent', () => {
  let component: GamesCurrentBoxScoreComponent;
  let fixture: ComponentFixture<GamesCurrentBoxScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesCurrentBoxScoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesCurrentBoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
