import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtletHthComponent } from './add-atlet-hth.component';

describe('AddAtletHthComponent', () => {
  let component: AddAtletHthComponent;
  let fixture: ComponentFixture<AddAtletHthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAtletHthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAtletHthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
