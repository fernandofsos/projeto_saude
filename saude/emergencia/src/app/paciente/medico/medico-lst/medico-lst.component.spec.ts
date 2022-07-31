import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoLstComponent } from './medico-lst.component';

describe('MedicoLstComponent', () => {
  let component: MedicoLstComponent;
  let fixture: ComponentFixture<MedicoLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoLstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
