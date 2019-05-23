import { Produto } from './../models/produto.module';
import { ProdutoService } from './../produto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {

  @ViewChild(MatTable) dadosTabela: MatTable<any>

   produtos: Produto [] = [];

   colunasProduto: string [] = ["codigo", "nome", "preco", "departamento", "descricao"];

  constructor(private servicoProduto: ProdutoService ) { }

  ngOnInit() {
    this.produtos = this.servicoProduto.getProdutos();
    this.servicoProduto.NovoProduto.subscribe((p) => {
      this.dadosTabela.renderRows();
    });
  }

}
