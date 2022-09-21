import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFranchiseTableComponent } from './home-franchise-table.component';

describe('HomeFranchiseTableComponent', () => {
  let component: HomeFranchiseTableComponent;
  let fixture: ComponentFixture<HomeFranchiseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFranchiseTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFranchiseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
