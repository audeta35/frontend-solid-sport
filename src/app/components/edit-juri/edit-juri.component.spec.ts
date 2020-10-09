import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJuriComponent } from './edit-juri.component';

describe('EditJuriComponent', () => {
  let component: EditJuriComponent;
  let fixture: ComponentFixture<EditJuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
