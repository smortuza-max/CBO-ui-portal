import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TransformationMetricsComponent } from './transformation-metrics.component';

const routes: Routes = [
  {
    path: '',
    component: TransformationMetricsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [TransformationMetricsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TransformationMetricsModule {}
