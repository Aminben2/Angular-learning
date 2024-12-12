import { Component, OnInit } from '@angular/core';
import { DashboardItemWrapperComponent } from '../dashboard-item-wrapper/dashboard-item-wrapper.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemWrapperComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  ngOnInit() {
    setInterval(() => {
      let random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.7) {
        this.currentStatus = 'unknown';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      }
    }, 2000);
  }
}
