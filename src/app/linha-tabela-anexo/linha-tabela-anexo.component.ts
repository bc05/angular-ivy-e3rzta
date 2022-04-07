import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IDocumentoAnexo } from '../tabela-anexo/tabela-anexo.component';

@Component({
  selector: '[linha-tabela-anexo]',
  templateUrl: './linha-tabela-anexo.component.html',
  styleUrls: ['./linha-tabela-anexo.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LinhaTabelaAnexoComponent),
      multi: true,
    },
  ],
})
export class LinhaTabelaAnexoComponent implements ControlValueAccessor {
  @Input() documentoAnexo: IDocumentoAnexo;

  constructor() {}

  writeValue(valor: any): void {
    console.log('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    console.log('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    console.log('Method not implemented.');
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('Method not implemented.');
  }
}
