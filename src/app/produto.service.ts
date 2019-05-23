import { Injectable, EventEmitter } from '@angular/core';
import { Produto } from './models/produto.module';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //Caso os dados viesse do servidor no farmator Json
  private dataFromServer: any [] = [
    {id:1 , name: "Laptoop", departamento_id: 4, preco: 800, descricao: "É um computador"},
    {id:2 , name: "Camisa", departamento_id: 2, preco: 50, descricao: "É uma roupa"},
    {id:3 , name: "O rei leão", departamento_id: 3, preco: 20, descricao: "É um livro"},
  ];

  private produtos: Produto [] = [];
  private nextID:number;
  NovoProduto: EventEmitter<Produto> = new EventEmitter<Produto>();

  private coisa = [];

   constructor(private departmentService: DepartmentService) 
   { 
     
     for(let p of this.dataFromServer) {
       this.produtos.push({
         id: p.id,
         name: p.name,
         descricao: p.descricao,
         preco: p.preco,
         departamento: this.departmentService.getDepartamentosById(p.id),
       });
       this.nextID = p.id+1;
    }
  }

 

  getProdutos(): Produto [] {
    return this.produtos;
  }

  adicionarProdutos(p: Produto){
    let prod: Produto = {...p, id: this.nextID++};
    this.produtos.push(prod);
    //console.log(this.produtos);
    this.NovoProduto.emit(prod);
  }

}
