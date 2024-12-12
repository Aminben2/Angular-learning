import { Component } from '@angular/core';
import { ServerStatusComponent } from "./server-status/server-status.component";
import { HeaderComponent } from "./header/header.component";
import { ServerTraficComponent } from "./server-trafic/server-trafic.component";
import { ServerTicketsComponent } from "./server-tickets/server-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ServerStatusComponent, HeaderComponent, ServerTraficComponent, ServerTicketsComponent],
})
export class AppComponent {
}
