import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlayersComponent } from './home-players.component';

describe('HomePlayersComponent', () => {
  let component: HomePlayersComponent;
  let fixture: ComponentFixture<HomePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
