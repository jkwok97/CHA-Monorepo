import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMgmtTableEditComponent } from './draft-mgmt-table-edit.component';

describe('DraftMgmtTableEditComponent', () => {
  let component: DraftMgmtTableEditComponent;
  let fixture: ComponentFixture<DraftMgmtTableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftMgmtTableEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftMgmtTableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
