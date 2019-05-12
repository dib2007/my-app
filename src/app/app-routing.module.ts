import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from './components/metrics.component';
import { ServersComponent } from './components/servers.component';
import { MetricService } from './services/MetricService';
import { NewMetricsComponent } from './components/new-metric.component';
import { NewServerComponent } from './components/new-server.component';
import { ServerService } from './services/ServerService';
import { UpdateMetricComponent } from './components/update-metric.component';
import { UpdateServerComponent } from './components/update-server.component';
import { ServerMetricResolver } from './resolvers/server-matrics.resolver';

const routes: Routes = [{
  path: 'metrics',
  component: MetricsComponent,
  resolve: {
    metrics: MetricService
  }
}, {
  path: 'servers',
  component: ServersComponent,
  resolve: {
    sm: ServerService
  }
}, {
  path: 'new-metric',
  component: NewMetricsComponent
}, {
  path: 'metrics/:name',
  component: UpdateMetricComponent
}, {
  path: 'new-server',
  component: NewServerComponent,
  resolve: {
    "metrics": MetricService
  }
}, {
  path: 'servers/:name',
  component: UpdateServerComponent
}, {
  path: 'servers/:sName/metrics',
  component: MetricsComponent,
  resolve: {
    "metrics": ServerMetricResolver
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
