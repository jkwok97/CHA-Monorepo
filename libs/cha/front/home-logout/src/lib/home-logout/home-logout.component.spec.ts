import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogoutComponent } from './home-logout.component';

describe('HomeLogoutComponent', () => {
  let component: HomeLogoutComponent;
  let fixture: ComponentFixture<HomeLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLogoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
