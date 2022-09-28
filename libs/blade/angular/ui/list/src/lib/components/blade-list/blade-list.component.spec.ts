import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BladeListComponent } from './blade-list.component';

describe('BladeListComponent', () => {
  let component: BladeListComponent;
  let fixture: ComponentFixture<BladeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BladeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BladeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
