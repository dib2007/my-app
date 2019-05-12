import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricsComponent } from './components/metrics.component';
import { ServersComponent } from './components/servers.component';
import { MetricService } from './services/MetricService';
import { HttpClientModule } from '@angular/common/http';
import { NewMetricsComponent } from './components/new-metric.component';
import { UpdateMetricComponent } from './components/update-metric.component';
import { NewServerComponent } from './components/new-server.component';
import { ServerService } from './services/ServerService';
import { UpdateServerComponent } from './components/update-server.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MetricsComponent,
    ServersComponent,
    NewMetricsComponent,
    UpdateMetricComponent,
    NewServerComponent,
    UpdateServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MetricService,ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
