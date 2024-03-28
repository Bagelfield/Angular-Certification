import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepButtonComponent } from './next-step-button.component';

describe('NextStepButtonComponent', () => {
  let component: NextStepButtonComponent;
  let fixture: ComponentFixture<NextStepButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextStepButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextStepButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
