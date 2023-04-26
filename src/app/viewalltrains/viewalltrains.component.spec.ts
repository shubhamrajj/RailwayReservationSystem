import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalltrainsComponent } from './viewalltrains.component';

describe('ViewalltrainsComponent', () => {
  let component: ViewalltrainsComponent;
  let fixture: ComponentFixture<ViewalltrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalltrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewalltrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
