import { Component } from '@angular/core';

@Component({
  selector: 'app-form', //!é atravez do selctor q é possivel usar e montar o componente
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  //atributos
  num1: number = 0;
  num2: number = 0;
  result : number = 0;

  //metodos 
  onClickSum(){
    this.result = this.num1 + this.num2
  };
  onClickSub(){
    this.result = this.num1 - this.num2
  }
  onClickMult(){
    this.result = this.num1 * this.num2
  }
  onClickDiv(){
    this.result = this.num1 / this.num2
  }
  onClickMed(){
    this.result = (this.num1 + this.num2)/2
  }
  onClickPo(){
    this.result = this.num1 ** this.num2
  }
}
