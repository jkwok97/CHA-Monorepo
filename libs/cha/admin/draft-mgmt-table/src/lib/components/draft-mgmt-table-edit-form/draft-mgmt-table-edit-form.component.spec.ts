import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMgmtTableEditFormComponent } from './draft-mgmt-table-edit-form.component';

describe('DraftMgmtTableEditFormComponent', () => {
  let component: DraftMgmtTableEditFormComponent;
  let fixture: ComponentFixture<DraftMgmtTableEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftMgmtTableEditFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftMgmtTableEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
