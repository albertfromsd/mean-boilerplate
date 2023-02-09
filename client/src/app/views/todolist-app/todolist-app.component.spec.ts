import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponentApp } from './todolist-app.component';

describe('TodolistComponent', () => {
  let component: TodolistComponentApp;
  let fixture: ComponentFixture<TodolistComponentApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistComponentApp ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistComponentApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
