import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNhlComponent } from './main-nhl.component';

describe('MainNhlComponent', () => {
  let component: MainNhlComponent;
  let fixture: ComponentFixture<MainNhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNhlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainNhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
