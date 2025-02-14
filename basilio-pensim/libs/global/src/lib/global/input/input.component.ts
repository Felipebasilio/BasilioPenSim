import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-input-component',
  templateUrl: './input.component.html',
  standalone: true
})
export class InputComponent {
  @Input() type = 'text';
  @Input() placeholder = '';
}
