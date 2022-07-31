import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteLstComponent } from './paciente-lst.component';

describe('PacienteLstComponent', () => {
  let component: PacienteLstComponent;
  let fixture: ComponentFixture<PacienteLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteLstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
