import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMgmtEntryEditFormComponent } from './draft-mgmt-entry-edit-form.component';

describe('DraftMgmtEntryEditFormComponent', () => {
  let component: DraftMgmtEntryEditFormComponent;
  let fixture: ComponentFixture<DraftMgmtEntryEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftMgmtEntryEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftMgmtEntryEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
