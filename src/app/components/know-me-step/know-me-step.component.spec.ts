import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMeStepComponent } from './know-me-step.component';

describe('KnowMeStepComponent', () => {
  let component: KnowMeStepComponent;
  let fixture: ComponentFixture<KnowMeStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMeStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
