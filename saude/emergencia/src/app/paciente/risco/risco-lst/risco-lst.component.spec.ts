import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscoLstComponent } from './risco-lst.component';

describe('RiscoLstComponent', () => {
  let component: RiscoLstComponent;
  let fixture: ComponentFixture<RiscoLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiscoLstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscoLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
