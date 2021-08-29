import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFetchComponent } from './todo-fetch.component';

describe('TodoFetchComponent', () => {
  let component: TodoFetchComponent;
  let fixture: ComponentFixture<TodoFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
