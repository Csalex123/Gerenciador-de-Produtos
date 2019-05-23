import { Departamento } from './models/departamento.module';
import { Injectable } from '@angular/core';
import { Produto } from './models/produto.module';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //Caso os dados viesse do servidor no farmator Json
  private dadosDoServidor: any [] = [
    {id:1 , name: "Laptoop", departamento_id: 4, preco: 800, descricao: "É um computador"},
    {id:1 , name: "Camisa", departamento_id: 2, preco: 50, descricao: "É uma roupa"},
    {id:1 , name: "O rei leão", departamento_id: 3, preco: 20, descricao: "É um livro"},
  ];

  private produtos: Produto [];
  private nextID:number;

  constructor(private departmentService: DepartmentService) { //Injetando o serviço do departamento dentro do serviço de Produtos

  
    for(let p of this.dadosDoServidor){
      this.produtos.push({
        id: p.id,
        name: p.name,
        descricao: p.descricao,
        preco: p.preco,
        departamento: this.departmentService.getDepartamentosById
      });
      this.nextID = p.id ++;
    }

   }

  getProdutos(): Produto [] {
    return this.produtos;
  }

  adicionarProdutos(p: Produto){
    this.produtos.push({...p, id: this.nextID++});
  }


}
