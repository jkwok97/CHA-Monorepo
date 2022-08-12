import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDraftComponent } from './main-draft.component';

describe('MainDraftComponent', () => {
  let component: MainDraftComponent;
  let fixture: ComponentFixture<MainDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDraftComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
