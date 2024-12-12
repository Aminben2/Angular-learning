import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTraficComponent } from './server-trafic.component';

describe('ServerTraficComponent', () => {
  let component: ServerTraficComponent;
  let fixture: ComponentFixture<ServerTraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerTraficComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerTraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
