import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAtletComponent } from './file-atlet.component';

describe('FileAtletComponent', () => {
  let component: FileAtletComponent;
  let fixture: ComponentFixture<FileAtletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAtletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAtletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
