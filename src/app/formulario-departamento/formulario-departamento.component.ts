import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-formulario-departamento',
  templateUrl: './formulario-departamento.component.html',
  styleUrls: ['./formulario-departamento.component.css']
})
export class FormularioDepartamentoComponent implements OnInit {

  //Atributos

  depName: string;

  constructor(private servicosDepartamento: DepartmentService) { 

  }

  ngOnInit() {
  }

  salvar(){
    this.servicosDepartamento.adicionarDepartamentos({ name: this.depName });
    this.limpar();
  }

  limpar(){
    this.depName = "";
  }

}
