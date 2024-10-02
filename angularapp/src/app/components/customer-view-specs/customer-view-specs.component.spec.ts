import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewSpecsComponent } from './customer-view-specs.component';

describe('CustomerViewSpecsComponent', () => {
  let component: CustomerViewSpecsComponent;
  let fixture: ComponentFixture<CustomerViewSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
