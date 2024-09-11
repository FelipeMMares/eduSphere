import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorBarComponent } from './gestor-bar.component';

describe('GestorBarComponent', () => {
  let component: GestorBarComponent;
  let fixture: ComponentFixture<GestorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
