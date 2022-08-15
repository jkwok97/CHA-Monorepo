import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlayerMgmtComponent } from './main-player-mgmt.component';

describe('MainPlayerMgmtComponent', () => {
  let component: MainPlayerMgmtComponent;
  let fixture: ComponentFixture<MainPlayerMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPlayerMgmtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPlayerMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
