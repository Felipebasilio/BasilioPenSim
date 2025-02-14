import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from '@basilio-pensim/global';

@Component({
  selector: 'app-home',
  imports: [CommonModule, GlobalComponentsModule],
  templateUrl: './home.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  plans = [
    {
      name: 'VGBL',
      description: 'Plano ideal para quem faz a declaração simplificada do IR.',
    },
    {
      name: 'PGBL',
      description: 'Plano ideal para quem faz a declaração completa do IR.',
    },
  ];
}
