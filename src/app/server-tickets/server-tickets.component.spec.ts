import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTicketsComponent } from './server-tickets.component';

describe('ServerTicketsComponent', () => {
  let component: ServerTicketsComponent;
  let fixture: ComponentFixture<ServerTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
