import { TypeModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service:TodoService, private router:Router){ }

  ngOnInit(): void {
    this.findAll();
    
  }

findAll():void
{
  this.service.findAll().subscribe((resposta) =>{
  resposta.forEach(todo => {
    if(todo.finalizar){
      this.listFinished.push(todo);
    } else{
      this.list.push(todo);
    }

  })
  
  this.closed = this.listFinished.length
  

})
}
finalizar(item: todo):void {
  item.finalizar = true;
  this.service.update(item).subscribe( ()=>{
    this.service.message('Task Finalizada com sucesso!');
    this.list = this.list.filter((todo) => todo.id !== item.id);
    this.closed++;

  });
}


 delete(id:any):void {
  this.service.delete(id).subscribe((resposta)=> {
    if(resposta === null){
      this.service.message('Task deletada com sucesso!');
      this.list = this.list.filter(todo => todo.id !==id);
    }
  })
 }
 navegarParaFinalizados(): void{
  this.router.navigate(['finalizados'])

}


}
