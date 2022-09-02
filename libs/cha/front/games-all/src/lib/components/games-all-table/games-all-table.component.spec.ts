import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAllTableComponent } from './games-all-table.component';

describe('GamesAllTableComponent', () => {
  let component: GamesAllTableComponent;
  let fixture: ComponentFixture<GamesAllTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesAllTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesAllTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
