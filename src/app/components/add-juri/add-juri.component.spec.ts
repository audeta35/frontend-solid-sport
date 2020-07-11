import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJuriComponent } from './add-juri.component';

describe('AddJuriComponent', () => {
  let component: AddJuriComponent;
  let fixture: ComponentFixture<AddJuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
