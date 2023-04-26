import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparticulartrainComponent } from './viewparticulartrain.component';

describe('ViewparticulartrainComponent', () => {
  let component: ViewparticulartrainComponent;
  let fixture: ComponentFixture<ViewparticulartrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewparticulartrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewparticulartrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
