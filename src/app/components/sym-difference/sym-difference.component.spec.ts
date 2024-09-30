import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymDifferenceComponent } from './sym-difference.component';

describe('SymDifferenceComponent', () => {
  let component: SymDifferenceComponent;
  let fixture: ComponentFixture<SymDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymDifferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SymDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
