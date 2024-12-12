import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'AppHeader'
  }
})
export class HeaderComponent {

}
