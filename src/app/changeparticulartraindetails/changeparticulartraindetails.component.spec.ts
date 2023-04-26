import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeparticulartraindetailsComponent } from './changeparticulartraindetails.component';

describe('ChangeparticulartraindetailsComponent', () => {
  let component: ChangeparticulartraindetailsComponent;
  let fixture: ComponentFixture<ChangeparticulartraindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeparticulartraindetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeparticulartraindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
