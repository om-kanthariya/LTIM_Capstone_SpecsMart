import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecsComponent } from './add-specs.component';

describe('AddSpecsComponent', () => {
  let component: AddSpecsComponent;
  let fixture: ComponentFixture<AddSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
