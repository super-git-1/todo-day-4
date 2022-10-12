import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocreateComponent } from './todo-create.component';

describe('TodoCreateComponent', () => {
  let component: TodocreateComponent;
  let fixture: ComponentFixture<TodocreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
