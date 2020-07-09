import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileJuriComponent } from './file-juri.component';

describe('FileJuriComponent', () => {
  let component: FileJuriComponent;
  let fixture: ComponentFixture<FileJuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileJuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileJuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
