import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoBarComponent } from './aluno-bar.component';

describe('AlunoBarComponent', () => {
  let component: AlunoBarComponent;
  let fixture: ComponentFixture<AlunoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlunoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
