import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAtletComponent } from './import-atlet.component';

describe('ImportAtletComponent', () => {
  let component: ImportAtletComponent;
  let fixture: ComponentFixture<ImportAtletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAtletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAtletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
