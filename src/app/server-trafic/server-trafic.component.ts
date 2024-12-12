import { Component } from '@angular/core';
import { DashboardItemWrapperComponent } from "../dashboard-item-wrapper/dashboard-item-wrapper.component";

@Component({
  selector: 'app-server-trafic',
  standalone: true,
  imports: [DashboardItemWrapperComponent],
  templateUrl: './server-trafic.component.html',
  styleUrl: './server-trafic.component.css'
})
export class ServerTraficComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
