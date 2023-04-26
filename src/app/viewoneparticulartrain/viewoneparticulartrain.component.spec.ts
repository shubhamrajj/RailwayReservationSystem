import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoneparticulartrainComponent } from './viewoneparticulartrain.component';

describe('ViewoneparticulartrainComponent', () => {
  let component: ViewoneparticulartrainComponent;
  let fixture: ComponentFixture<ViewoneparticulartrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewoneparticulartrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewoneparticulartrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
