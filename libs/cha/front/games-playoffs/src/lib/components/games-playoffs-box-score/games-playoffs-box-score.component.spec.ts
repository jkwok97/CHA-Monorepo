import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesPlayoffsBoxScoreComponent } from './games-playoffs-box-score.component';

describe('GamesPlayoffsBoxScoreComponent', () => {
  let component: GamesPlayoffsBoxScoreComponent;
  let fixture: ComponentFixture<GamesPlayoffsBoxScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesPlayoffsBoxScoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesPlayoffsBoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
