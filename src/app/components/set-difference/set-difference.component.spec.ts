import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDifferenceComponent } from './set-difference.component';

describe('SetDifferenceComponent', () => {
  let component: SetDifferenceComponent;
  let fixture: ComponentFixture<SetDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetDifferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
