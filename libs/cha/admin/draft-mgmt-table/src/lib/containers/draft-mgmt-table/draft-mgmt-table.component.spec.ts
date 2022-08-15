import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMgmtTableComponent } from './draft-mgmt-table.component';

describe('DraftMgmtTableComponent', () => {
  let component: DraftMgmtTableComponent;
  let fixture: ComponentFixture<DraftMgmtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftMgmtTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftMgmtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
