import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecsComponent } from './view-specs.component';

describe('ViewSpecsComponent', () => {
  let component: ViewSpecsComponent;
  let fixture: ComponentFixture<ViewSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
