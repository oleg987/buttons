import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuckingButtonBlockComponent } from './fucking-button-block.component';

describe('FuckingButtonBlockComponent', () => {
  let component: FuckingButtonBlockComponent;
  let fixture: ComponentFixture<FuckingButtonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuckingButtonBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuckingButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
