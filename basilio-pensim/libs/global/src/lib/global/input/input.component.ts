import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-input-component',
  templateUrl: './input.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class InputComponent {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = ''; // Adiciona a propriedade `value`
  @Output() valueChange = new EventEmitter(); // Emissor de eventos para mudanças de valor
}
