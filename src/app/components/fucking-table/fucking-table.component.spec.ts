import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuckingTableComponent } from './fucking-table.component';

describe('FuckingTableComponent', () => {
  let component: FuckingTableComponent;
  let fixture: ComponentFixture<FuckingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuckingTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuckingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
