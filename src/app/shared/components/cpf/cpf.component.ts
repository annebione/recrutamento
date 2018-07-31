import {
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef,
  OnChanges,
  Input,
  Output, 
  EventEmitter
} from '@angular/core';

import cpfValidator from 'validar-cpf';

@Component({
  selector: 'cpf-input',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit, OnChanges {
  @Input() formSubmitted: boolean;
  @Output() cpfIsValid = new EventEmitter<boolean>(); 
  onChange = new EventEmitter();
  @ViewChild('cpfValidation') cpfInput: ElementRef;
  
  constructor() {
    this.formSubmitted = false;
  }

  ngOnInit() {
    if(this.formSubmitted)
      this.checkCpfStatus();
  }

  ngOnChanges() {
    if(this.formSubmitted)
      this.checkCpfStatus();
  }

  checkCpfStatus() {
    this.cpfIsValid = cpfValidator(this.cpfInput.nativeElement.value);
    this.cpfIsValid.emit();
  }
}