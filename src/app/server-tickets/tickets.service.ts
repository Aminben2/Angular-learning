import { Injectable } from '@angular/core';
import { Ticket } from './ticker.model';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  tickets: Ticket[] = [
    {
      id: 1,
      title: 'Server down',
      request: 'Please fix the server, it is down',
      status: 'opened',
    },
  ];

  getTickets() {
    return this.tickets;
  }

  addTicket(title: string, request: string) {
    this.tickets.unshift({
      id: this.tickets.length + 1,
      title: title,
      request: request,
      status: 'opened',
    });
  }

  markTicketClosed(id: number) {
    this.tickets = this.tickets.map((t) =>
      t.id == id ? { ...t, status: 'closed' } : t
    );
  }
}
