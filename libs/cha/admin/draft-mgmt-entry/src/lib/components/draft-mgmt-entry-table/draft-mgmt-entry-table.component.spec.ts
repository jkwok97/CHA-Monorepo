import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMgmtEntryTableComponent } from './draft-mgmt-entry-table.component';

describe('DraftMgmtEntryTableComponent', () => {
  let component: DraftMgmtEntryTableComponent;
  let fixture: ComponentFixture<DraftMgmtEntryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftMgmtEntryTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftMgmtEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
