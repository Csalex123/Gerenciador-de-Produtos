import { Component, OnInit } from '@angular/core';
import { Departamento } from '../models/Departamento.module';

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

  constructor() { }

  ngOnInit() {
  }

  
  salvar(){

  }

  limpar(){
    
  }

}
