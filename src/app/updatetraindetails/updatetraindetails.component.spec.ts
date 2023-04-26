import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetraindetailsComponent } from './updatetraindetails.component';

describe('UpdatetraindetailsComponent', () => {
  let component: UpdatetraindetailsComponent;
  let fixture: ComponentFixture<UpdatetraindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetraindetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetraindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
