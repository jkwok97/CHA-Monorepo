import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMgmtEntryComponent } from './draft-mgmt-entry.component';

describe('DraftMgmtEntryComponent', () => {
  let component: DraftMgmtEntryComponent;
  let fixture: ComponentFixture<DraftMgmtEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftMgmtEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftMgmtEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
