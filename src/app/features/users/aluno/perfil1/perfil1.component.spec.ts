import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil1Component } from './perfil1.component';

describe('Perfil1Component', () => {
  let component: Perfil1Component;
  let fixture: ComponentFixture<Perfil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfil1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Perfil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
