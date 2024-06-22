import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../interface/todoList.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('todoForm') todoForm!: NgForm

  @Output() emmitTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>()

  onTodoSubmit() {
    if (this.todoForm.valid) {
      let newTodo = this.todoForm.value;
      console.log(newTodo);
      this.emmitTodo.emit(newTodo);
      Swal.fire({
        title:`${newTodo.todoItem} Added Successfully!!!`,
        icon:'success',
        timer:2000
      })
      this.todoForm.reset();
    }
    else{
      Swal.fire({
        title: `Please Complete Mandatory Fields!!! `,
        icon: 'error',
        timer: 2000
      })
    }
  }

}
