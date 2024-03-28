import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarStepsComponent } from './navbar-steps.component';

describe('NavbarStepsComponent', () => {
  let component: NavbarStepsComponent;
  let fixture: ComponentFixture<NavbarStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
