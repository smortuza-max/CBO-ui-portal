import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'metrices/:track/:year',
    loadChildren: () =>
      import('./transformation-metrics/transformation-metrics.module').then(
        (m) => m.TransformationMetricsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./deep-dive-form/deep-dive-form.module').then(
        (m) => m.DeepDiveFormModule
      ),
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
