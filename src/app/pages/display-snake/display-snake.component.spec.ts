import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySnakeComponent } from './display-snake.component';

describe('DisplaySnakeComponent', () => {
  let component: DisplaySnakeComponent;
  let fixture: ComponentFixture<DisplaySnakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySnakeComponent]
    });
    fixture = TestBed.createComponent(DisplaySnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
