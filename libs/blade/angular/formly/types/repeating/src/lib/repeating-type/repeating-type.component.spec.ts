import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatingTypeComponent } from './repeating-type.component';

describe('RepeatingTypeComponent', () => {
  let component: RepeatingTypeComponent;
  let fixture: ComponentFixture<RepeatingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatingTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepeatingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
