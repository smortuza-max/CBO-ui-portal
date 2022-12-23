import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ITrack } from '../models/interfaces.model';

@Component({
  selector: 'app-deep-dive-form',
  templateUrl: './deep-dive-form.component.html',
  styleUrls: ['./deep-dive-form.component.scss'],
})
export class DeepDiveFormComponent {
  public roles = [
    'Staff',
    'Senior staff',
    'Manager',
    'Senior Manager',
    'Director',
  ];
  public allAccessRole = 'Director';

  public tracks: ITrack[] = [
    { name: 'Core Business Operations', initials: 'CBO' },
    { name: 'Application Modernization & Innovation', initials: 'AM&I' },
    { name: 'Cloud Engineering', initials: 'CE' },
    { name: 'Core Industry Solutions', initials: 'CIS' },
  ];

  public financialYear = Array.from(
    { length: new Date().getFullYear() - 1999 },
    (x, i) => i + 2000
  );

  public form = this.fb.group({
    practitionerRole: [this.allAccessRole, Validators.required],
    businessTrack: ['', Validators.required],
    financialYear: ['', Validators.required],
  });

  public isFormsubmitted = false;

  constructor(private fb: NonNullableFormBuilder, private router: Router) {}

  onSubmit() {
    this.isFormsubmitted = true;
    if (this.form.valid) {
      this.router.navigate([
        '/metrices',
        this.form.value.businessTrack,
        this.form.value.financialYear,
      ]);
    }
  }

  onReset() {
    this.form.reset();
    this.isFormsubmitted = false;
  }
}
