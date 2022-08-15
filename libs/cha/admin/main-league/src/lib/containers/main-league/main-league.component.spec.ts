import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeagueComponent } from './main-league.component';

describe('MainLeagueComponent', () => {
  let component: MainLeagueComponent;
  let fixture: ComponentFixture<MainLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainLeagueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
