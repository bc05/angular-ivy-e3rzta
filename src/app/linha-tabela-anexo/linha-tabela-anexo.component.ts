import { Component, Input, OnInit } from '@angular/core';
import { IDocumentoAnexo } from '../tabela-anexo/tabela-anexo.component';

@Component({
  selector: '[linha-tabela-anexo]',
  templateUrl: './linha-tabela-anexo.component.html',
  styleUrls: ['./linha-tabela-anexo.component.scss'],
})
export class LinhaTabelaAnexoComponent implements OnInit {
  @Input() documentoAnexo: IDocumentoAnexo;
  constructor() {}

  ngOnInit() {}
}
