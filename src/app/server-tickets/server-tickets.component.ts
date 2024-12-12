import { Component } from '@angular/core';
import { DashboardItemWrapperComponent } from "../dashboard-item-wrapper/dashboard-item-wrapper.component";
import { TicketsService } from './tickets.service';
import { Ticket } from './ticker.model';
import { TicketComponent } from "../ticket/ticket.component";
import { NewTicketComponent } from "../new-ticket/new-ticket.component";

@Component({
  selector: 'app-server-tickets',
  standalone: true,
  imports: [DashboardItemWrapperComponent, TicketComponent, NewTicketComponent],
  templateUrl: './server-tickets.component.html',
  styleUrl: './server-tickets.component.css'
})
export class ServerTicketsComponent {

  constructor(private ticketsService :TicketsService) { }

  get tickets(): Ticket[] {
    console.log( this.ticketsService.getTickets());

    return this.ticketsService.getTickets();

  }
}
