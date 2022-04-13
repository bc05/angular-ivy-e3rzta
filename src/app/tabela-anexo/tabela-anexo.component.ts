import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IDocumentoAnexo {
  nome: string;
  tipo: string;
  classificacao: string;
}

@Component({
  selector: 'tabela-anexo',
  templateUrl: './tabela-anexo.component.html',
  styleUrls: ['./tabela-anexo.component.scss'],
})
export class TabelaAnexoComponent implements OnInit {
  documentoAnexoForm: FormGroup;

  documentosAnexos: IDocumentoAnexo[] = [
    {
      nome: 'Regulamento',
      tipo: 'regulamento',
      classificacao: 'Obrigatório',
    },
    {
      nome: 'Termo',
      tipo: 'termo',
      classificacao: 'Obrigatório',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.construirDocumentoAnexoForm();
  }

  construirDocumentoAnexoForm() {
    this.documentoAnexoForm = this.fb.group({});

    this.documentosAnexos.forEach((documentoAnexo) => {
      const control = this.fb.control(
        {
          id: Math.floor(Math.random() * 10000),
        },
        Validators.required
      );
      this.documentoAnexoForm.addControl(documentoAnexo.tipo, control);
    });
  }
}
