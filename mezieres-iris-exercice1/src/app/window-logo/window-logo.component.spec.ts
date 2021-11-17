import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowLogoComponent } from './window-logo.component';

describe('WindowLogoComponent', () => {
  let component: WindowLogoComponent;
  let fixture: ComponentFixture<WindowLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
