import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuckingWrongComponentComponent } from './fucking-wrong-component.component';

describe('FuckingWrongComponentComponent', () => {
  let component: FuckingWrongComponentComponent;
  let fixture: ComponentFixture<FuckingWrongComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuckingWrongComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuckingWrongComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
