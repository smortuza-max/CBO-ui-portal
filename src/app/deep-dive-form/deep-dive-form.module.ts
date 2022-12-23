import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DeepDiveFormModule {}
