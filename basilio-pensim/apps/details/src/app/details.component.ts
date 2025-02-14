import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  standalone: true
})
export class DetailsComponent {
  planType: string | null;

  constructor(private route: ActivatedRoute) {
    this.planType = this.route.snapshot.paramMap.get('plan');
  }
}
