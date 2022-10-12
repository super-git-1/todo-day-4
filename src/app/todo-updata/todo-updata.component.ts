import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Itodo } from '../model/todo/todo.module';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-updata',
  templateUrl: './todo-updata.component.html',
  styleUrls: ['./todo-updata.component.css']
})
export class TodoUpdataComponent implements OnInit {
  addtask?:FormGroup;
  constructor(private TodoService:TodoService) { }

  ngOnInit(): void {
  }
  gettask(){
    this.TodoService.getAll().subscribe(data=>{
      // this.task=data
    })
  }
}
