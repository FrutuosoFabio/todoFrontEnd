import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { todo } from '../models/todo';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todo: todo =  {
    titulo: '',
    descricao:'',
    dataParaFinalizar: new Date(),
    finalizar: false
  }
 constructor(private router: Router, private service:TodoService, private route:ActivatedRoute ) { }

ngOnInit(): void {
  this.todo.id =this.route.snapshot.paramMap.get("id")!;
  this.findById();
}
 
 findById():void{
  this.service.findbyid(this.todo.id).subscribe((resposta)=>{
    this.todo = resposta;
  })
 }

create(): void{
  this.formataData();
  this.service.create(this.todo).subscribe((resposta) => {
    this.service.message('To-do Criado com sucesso!');
    this.router.navigate(['']);

  },err => {
    this.service.message('Falha ao criar To-do');
    this.router.navigate([''])

  


  })
}

update():void{
this.formataData();
this.service.update(this.todo).subscribe((resposta)=>{
  this.service.message("Informações Atualizadas com suecesso !");
   this.router.navigate(['']);
}, error => {  this.service.message("Falha ao Atualizar informações !");
this.router.navigate(['']);
})
   }
cancel(): void{
  this.router.navigate([''])

}
formataData():void {
  let data = new Date(this.todo.dataParaFinalizar)
  this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
}

}
