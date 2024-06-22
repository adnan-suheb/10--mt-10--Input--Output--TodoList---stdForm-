import { Component } from '@angular/core';
import { Itodo } from './shared/interface/todoList.interface';
import { Istd } from './shared/interface/stdForm.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mt-10';



  // todoArray:Array<Itodo>=[
  //   {
  //     todoItem:"javascript"
  //   }
  // ]
  todoArray:Array<Itodo>=JSON.parse(localStorage.getItem('todoArr')||'[]')

//   stdArray:Array<Istd>=[
//   {
//     fname:'John',
//     lname:'Doe',
//     email:'jd@gmail.com',
//     contact:9876543210
//   }
// ]
stdArray:Array<Istd>=JSON.parse(localStorage.getItem('stdArr')||'[]')


  onTodoEmmit(data:Itodo){
    this.todoArray.unshift(data)
    localStorage.setItem("todoArr", JSON.stringify(this.todoArray));
  }

  onStdEmmit(data:Istd){
    console.log(data)
    this.stdArray.unshift(data)
    localStorage.setItem("stdArr", JSON.stringify(this.stdArray));
  }




}
