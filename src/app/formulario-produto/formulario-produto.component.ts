import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from '../models/Departamento.module';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrls: ['./formulario-produto.component.css']
})
export class FormularioProdutoComponent implements OnInit {

  //Atributos dos campos que teremos:

  nome:string;
  departamento: Departamento;
  preco: number;
  descricao: string;

  departamentos: Departamento [];


  constructor(private servicosProdutos: ProdutoService, private servicosDerpartamento: DepartmentService) { 

  }

  ngOnInit() {
    this.departamentos = this.servicosDerpartamento.getDepartamentos();
  }

  
  salvar(){
    this.servicosProdutos.adicionarProdutos({
      name: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      departamento: this.departamento
    });
  }

  limpar(){
    this.nome = "";
    this.preco = 0;
    this.descricao = "";
    this.departamentos = null;
  }

}
