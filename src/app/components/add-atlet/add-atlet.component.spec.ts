import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtletComponent } from './add-atlet.component';

describe('AddAtletComponent', () => {
  let component: AddAtletComponent;
  let fixture: ComponentFixture<AddAtletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAtletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAtletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
