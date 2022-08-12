import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCurrentComponent } from './games-current.component';

describe('GamesCurrentComponent', () => {
  let component: GamesCurrentComponent;
  let fixture: ComponentFixture<GamesCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesCurrentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
