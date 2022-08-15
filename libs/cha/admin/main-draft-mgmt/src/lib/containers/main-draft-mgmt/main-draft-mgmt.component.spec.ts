import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDraftMgmtComponent } from './main-draft-mgmt.component';

describe('MainDraftMgmtComponent', () => {
  let component: MainDraftMgmtComponent;
  let fixture: ComponentFixture<MainDraftMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDraftMgmtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainDraftMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
