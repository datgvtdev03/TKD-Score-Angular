import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCountWssComponent } from './test-count-wss.component';

describe('TestCountWssComponent', () => {
  let component: TestCountWssComponent;
  let fixture: ComponentFixture<TestCountWssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCountWssComponent]
    });
    fixture = TestBed.createComponent(TestCountWssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
