import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentJuriComponent } from './assessment-juri.component';

describe('AssessmentJuriComponent', () => {
  let component: AssessmentJuriComponent;
  let fixture: ComponentFixture<AssessmentJuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentJuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentJuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
