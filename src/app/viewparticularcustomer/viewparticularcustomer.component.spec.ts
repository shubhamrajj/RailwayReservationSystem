import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparticularcustomerComponent } from './viewparticularcustomer.component';

describe('ViewparticularcustomerComponent', () => {
  let component: ViewparticularcustomerComponent;
  let fixture: ComponentFixture<ViewparticularcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewparticularcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewparticularcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
