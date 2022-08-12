import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsChampionsComponent } from './awards-champions.component';

describe('AwardsChampionsComponent', () => {
  let component: AwardsChampionsComponent;
  let fixture: ComponentFixture<AwardsChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardsChampionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
