import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';
import { FormularioDepartamentoComponent } from './formulario-departamento/formulario-departamento.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioProdutoComponent,
    FormularioDepartamentoComponent,
    TabelaProdutosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
