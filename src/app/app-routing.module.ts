import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from './components/metrics.component';
import { ServersComponent } from './components/servers.component';
import { MetricService } from './services/MetricService';
import { NewMetricsComponent } from './components/new-metric.component';

const routes: Routes = [{
  path: 'metrics',
  component: MetricsComponent,
  resolve: {
    metrics : MetricService
  }
},{
  path: 'servers',
  component: ServersComponent
},{
  path: 'new-metric',
  component: NewMetricsComponent
},{
  path: 'metrics/:name',
  component: NewMetricsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
