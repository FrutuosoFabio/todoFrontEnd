import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { todo } from '../models/todo';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {
  closed = 0;
  list:todo[] = [];
  listFinished:todo[]=[]

  constructor(private service:TodoService){ }

  ngOnInit(): void {
    this.findAll();
    
  }

findAll():void
{
  this.service.findAll().subscribe((resposta) =>{
  this.list = resposta;
  
  
  

})
}


}

