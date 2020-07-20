import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTatamiComponent } from './file-tatami.component';

describe('FileTatamiComponent', () => {
  let component: FileTatamiComponent;
  let fixture: ComponentFixture<FileTatamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTatamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTatamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
