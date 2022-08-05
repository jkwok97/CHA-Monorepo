import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFormFieldWrapperComponent } from './default-form-field-wrapper.component';

describe('DefaultFormFieldWrapperComponent', () => {
  let component: DefaultFormFieldWrapperComponent;
  let fixture: ComponentFixture<DefaultFormFieldWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultFormFieldWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultFormFieldWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
