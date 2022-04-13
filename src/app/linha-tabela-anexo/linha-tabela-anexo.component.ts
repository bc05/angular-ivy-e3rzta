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

  onChange: (valor: Object) => void;
  onTouch: () => void;
  valor: Object;

  constructor() {}

  writeValue(valor: Object): void {
    this.valor = valor;
  }

  registerOnChange(fn: (valor: Object) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  mudouValor() {
    this.valor = { id: Math.floor(Math.random() * 10) };
    if (this.onChange) {
      this.onChange(this.valor);
    }
  }
}
