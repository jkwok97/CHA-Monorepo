import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMgmtTableTableComponent } from './draft-mgmt-table-table.component';

describe('DraftMgmtTableTableComponent', () => {
  let component: DraftMgmtTableTableComponent;
  let fixture: ComponentFixture<DraftMgmtTableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftMgmtTableTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftMgmtTableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
