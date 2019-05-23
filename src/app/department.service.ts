import { Departamento } from './models/departamento.module';
import { Injectable } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departamentos: Departamento[] = [
    {id:1,name:"Vestuário"},
    {id:2,name:"Livros"},
    {id:3,name:"Computadores"},
  ];

  private nextID:number = 4;
  constructor() { }

  getDepartamentos(): Departamento[]{
    return this.departamentos;
  }

  adicionarDepartamentos(d: Departamento){
    this.departamentos.push({...d, id: this.nextID ++}); //Fazendo uma junção.
    console.log(this.departamentos);
  }

}
