import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFranchiseTableSidebarComponent } from './home-franchise-table-sidebar.component';

describe('HomeFranchiseTableSidebarComponent', () => {
  let component: HomeFranchiseTableSidebarComponent;
  let fixture: ComponentFixture<HomeFranchiseTableSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFranchiseTableSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFranchiseTableSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
