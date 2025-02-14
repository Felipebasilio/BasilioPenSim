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

  @Input() value!: number; // Entrada de valor
  @Output() valueChange = new EventEmitter<number>(); // Emite o valor atualizado

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).valueAsNumber;
    this.valueChange.emit(newValue); // Notifica o componente pai sobre a mudança
  }
}
