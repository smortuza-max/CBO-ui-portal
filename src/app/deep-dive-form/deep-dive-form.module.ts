import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeepDiveFormComponent } from './deep-dive-form.component';

const routes: Routes = [
  {
    path: '',
    component: DeepDiveFormComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [DeepDiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DeepDiveFormModule {}
