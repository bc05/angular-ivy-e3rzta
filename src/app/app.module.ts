import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabelaAnexoComponent } from './tabela-anexo/tabela-anexo.component';
import { LinhaTabelaAnexoComponent } from './linha-tabela-anexo/linha-tabela-anexo.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, TabelaAnexoComponent, LinhaTabelaAnexoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
