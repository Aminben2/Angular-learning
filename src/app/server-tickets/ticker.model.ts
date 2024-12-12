export interface Ticket {
  id: number;
  title: string;
  request: string;
  status: 'opened' | 'closed';
}
