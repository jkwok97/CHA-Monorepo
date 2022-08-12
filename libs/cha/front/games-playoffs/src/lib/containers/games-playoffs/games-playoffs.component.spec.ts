import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPlayoffsComponent } from './games-playoffs.component';

describe('GamesPlayoffsComponent', () => {
  let component: GamesPlayoffsComponent;
  let fixture: ComponentFixture<GamesPlayoffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesPlayoffsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesPlayoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
