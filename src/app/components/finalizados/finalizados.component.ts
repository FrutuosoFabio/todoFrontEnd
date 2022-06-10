import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TodoService } from "src/app/services/todo.service";
import { todo } from "../models/todo";

@Component({
  selector: "app-finalizados",
  templateUrl: "./finalizados.component.html",
  styleUrls: ["./finalizados.component.css"],
})
export class FinalizadosComponent implements OnInit {
  listFinished: todo[] = [];

  constructor(private service: TodoService,private router:Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((todo) => {
        if (todo.finalizar) {
          this.listFinished.push(todo);
        }
      });
    });
  }
  voltar(): void{
    this.router.navigate([''])

  }
  
  
}
