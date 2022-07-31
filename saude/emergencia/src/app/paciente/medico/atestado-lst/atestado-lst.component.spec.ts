import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtestadoLstComponent } from './atestado-lst.component';

describe('AtestadoLstComponent', () => {
  let component: AtestadoLstComponent;
  let fixture: ComponentFixture<AtestadoLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtestadoLstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtestadoLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
