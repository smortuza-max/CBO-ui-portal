import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationMetricsComponent } from './transformation-metrics.component';

describe('TransformationMetricsComponent', () => {
  let component: TransformationMetricsComponent;
  let fixture: ComponentFixture<TransformationMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformationMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformationMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
