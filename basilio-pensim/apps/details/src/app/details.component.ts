import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GlobalComponentsModule } from '@basilio-pensim/global';

@Component({
  selector: 'app-details',
  imports: [CommonModule, GlobalComponentsModule],
  templateUrl: './details.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsComponent {
  planType: string | null;

  constructor(private route: ActivatedRoute) {
    this.planType = this.route.snapshot.paramMap.get('plan');
  }
}
