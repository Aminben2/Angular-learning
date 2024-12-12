import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemWrapperComponent } from './dashboard-item-wrapper.component';

describe('DashboardItemWrapperComponent', () => {
  let component: DashboardItemWrapperComponent;
  let fixture: ComponentFixture<DashboardItemWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardItemWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardItemWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
