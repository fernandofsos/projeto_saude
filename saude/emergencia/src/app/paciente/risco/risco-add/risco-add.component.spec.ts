import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscoAddComponent } from './risco-add.component';

describe('RiscoAddComponent', () => {
  let component: RiscoAddComponent;
  let fixture: ComponentFixture<RiscoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiscoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
