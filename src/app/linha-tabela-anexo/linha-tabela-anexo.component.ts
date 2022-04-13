import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
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
  //valor: Object;

  formControl: FormControl;

  constructor(private fb: FormBuilder) {
    this.formControl = this.fb.control(null, Validators.required);
  }

  writeValue(valor: Object): void {
    this.formControl.setValue(valor);
  }

  registerOnChange(fn: (valor: Object) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  mudouValor(valor: any) {
    this.formControl.setValue(valor);
    if (this.onChange) {
      this.onChange(this.formControl.value);
    }
  }

  remover() {
    this.mudouValor(null);
  }

  upload() {
    this.mudouValor(Math.floor(Math.random() * 100000));
  }
}
