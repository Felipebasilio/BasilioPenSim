import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button-component',
  templateUrl: './button.component.html',
  standalone: true
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
}
