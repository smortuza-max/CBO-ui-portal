import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepDiveFormComponent } from './deep-dive-form.component';

describe('DeepDiveFormComponent', () => {
  let component: DeepDiveFormComponent;
  let fixture: ComponentFixture<DeepDiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepDiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepDiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
