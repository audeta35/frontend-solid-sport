import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuScoreboardComponent } from './menu-scoreboard.component';

describe('MenuScoreboardComponent', () => {
  let component: MenuScoreboardComponent;
  let fixture: ComponentFixture<MenuScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
