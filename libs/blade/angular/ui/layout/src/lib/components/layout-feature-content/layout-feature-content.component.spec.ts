import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFeatureContentComponent } from './layout-feature-content.component';

describe('LayoutFeatureContentComponent', () => {
  let component: LayoutFeatureContentComponent;
  let fixture: ComponentFixture<LayoutFeatureContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutFeatureContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutFeatureContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
