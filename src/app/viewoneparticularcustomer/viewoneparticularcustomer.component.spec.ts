import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoneparticularcustomerComponent } from './viewoneparticularcustomer.component';

describe('ViewoneparticularcustomerComponent', () => {
  let component: ViewoneparticularcustomerComponent;
  let fixture: ComponentFixture<ViewoneparticularcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewoneparticularcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewoneparticularcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
