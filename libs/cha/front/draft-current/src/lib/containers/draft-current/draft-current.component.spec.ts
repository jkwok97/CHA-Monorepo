import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftCurrentComponent } from './draft-current.component';

describe('DraftCurrentComponent', () => {
  let component: DraftCurrentComponent;
  let fixture: ComponentFixture<DraftCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraftCurrentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
