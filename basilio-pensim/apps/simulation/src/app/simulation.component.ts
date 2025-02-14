import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentsModule } from '@basilio-pensim/global';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  imports: [FormsModule, CommonModule, GlobalComponentsModule],

  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class SimulationComponent {
  age!: number;
  contribution!: number;
  years!: number;
  rate = 0.05; // Taxa de juros fixa
  result!: number;

  calculate() {
    const months = this.years * 12;
    this.result =
      this.contribution *
      ((Math.pow(1 + this.rate / 12, months) - 1) / (this.rate / 12));
  }
}
