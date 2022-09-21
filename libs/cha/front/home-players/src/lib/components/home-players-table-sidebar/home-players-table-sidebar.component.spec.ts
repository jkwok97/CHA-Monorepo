import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlayersTableSidebarComponent } from './home-players-table-sidebar.component';

describe('HomePlayersTableSidebarComponent', () => {
  let component: HomePlayersTableSidebarComponent;
  let fixture: ComponentFixture<HomePlayersTableSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePlayersTableSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePlayersTableSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
