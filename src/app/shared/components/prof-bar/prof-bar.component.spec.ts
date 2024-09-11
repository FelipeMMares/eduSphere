import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfBarComponent } from './prof-bar.component';

describe('ProfBarComponent', () => {
  let component: ProfBarComponent;
  let fixture: ComponentFixture<ProfBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
