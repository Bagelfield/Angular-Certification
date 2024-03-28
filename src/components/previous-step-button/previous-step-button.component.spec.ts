import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousStepButtonComponent } from './previous-step-button.component';

describe('PreviousStepButtonComponent', () => {
  let component: PreviousStepButtonComponent;
  let fixture: ComponentFixture<PreviousStepButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousStepButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousStepButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
