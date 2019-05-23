import { Departamento } from './Departamento.module';

export interface Produto{
    id:number;
    name:string;
    preco:number;
    descricao:string;
    departamento: Departamento;
}