import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoToggleComponent } from './todo-toggle.component';

describe('TodoToggleComponent', () => {
  let component: TodoToggleComponent;
  let fixture: ComponentFixture<TodoToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
