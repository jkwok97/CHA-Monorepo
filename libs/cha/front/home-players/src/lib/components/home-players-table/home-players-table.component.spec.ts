import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlayersTableComponent } from './home-players-table.component';

describe('HomePlayersTableComponent', () => {
  let component: HomePlayersTableComponent;
  let fixture: ComponentFixture<HomePlayersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePlayersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePlayersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
