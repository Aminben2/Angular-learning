import { Component, Input } from '@angular/core';
import { Ticket } from '../server-tickets/ticker.model';
import { TicketsService } from '../server-tickets/tickets.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) ticket!: Ticket;
  expanded = false;

  constructor(private ticketService: TicketsService) {}
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  markItClosed() {
    this.ticketService.markTicketClosed(this.ticket.id);
  }
}
