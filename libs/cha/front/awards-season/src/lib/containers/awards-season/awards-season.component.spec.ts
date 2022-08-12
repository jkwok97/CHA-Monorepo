import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsSeasonComponent } from './awards-season.component';

describe('AwardsSeasonComponent', () => {
  let component: AwardsSeasonComponent;
  let fixture: ComponentFixture<AwardsSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardsSeasonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
