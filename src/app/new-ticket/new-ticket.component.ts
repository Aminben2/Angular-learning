import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketsService } from '../server-tickets/tickets.service';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  title: string = '';
  request: string = '';
  constructor(private ticketService: TicketsService) {}

  onSubmit() {
    this.ticketService.addTicket(this.title, this.request);
    this.title = '';
    this.request = '';
  }
}
