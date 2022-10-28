import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMgmtEntryEditComponent } from './draft-mgmt-entry-edit.component';

describe('DraftMgmtEntryEditComponent', () => {
  let component: DraftMgmtEntryEditComponent;
  let fixture: ComponentFixture<DraftMgmtEntryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftMgmtEntryEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftMgmtEntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
