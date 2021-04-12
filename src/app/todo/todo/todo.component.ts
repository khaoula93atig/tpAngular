import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../sevices/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos : Todo[] = [];
  todo =new Todo();
  constructor(
    private todoservice :TodoService,
    private toastr : ToastrService ){

  }

  ngOnInit(): void {
    this.todos = this.todoservice.getTodos();
  }
  addTodo(){
    this.todoservice.addTodo(this.todo);
    this.todo = new Todo();
    this.toastr.success(`le todo ${this.todo.name} a ete ajouter avec succés`);
  }
  deleteTodo(todo:Todo){
    this.todoservice.deleteTodo(todo);
    this.toastr.success(`le todo ${todo.name} a ete supprimer avec succés`);
  }

}
