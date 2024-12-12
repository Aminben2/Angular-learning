import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item-wrapper.component.html',
  styleUrl: './dashboard-item-wrapper.component.css'
})
export class DashboardItemWrapperComponent {
  imageAlt = input.required<string>();
  imageSrc = input.required<string>();
  titile = input.required<string>();
  
}
