import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdataComponent } from './todo-updata.component';

describe('TodoUpdataComponent', () => {
  let component: TodoUpdataComponent;
  let fixture: ComponentFixture<TodoUpdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoUpdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
