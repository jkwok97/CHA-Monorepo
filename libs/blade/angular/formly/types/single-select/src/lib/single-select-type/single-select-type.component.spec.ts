import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectTypeComponent } from './single-select-type.component';

describe('SingleSelectTypeComponent', () => {
  let component: SingleSelectTypeComponent;
  let fixture: ComponentFixture<SingleSelectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSelectTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleSelectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
