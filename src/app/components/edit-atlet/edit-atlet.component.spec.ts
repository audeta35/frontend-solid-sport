import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAtletComponent } from './edit-atlet.component';

describe('EditAtletComponent', () => {
  let component: EditAtletComponent;
  let fixture: ComponentFixture<EditAtletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAtletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAtletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
