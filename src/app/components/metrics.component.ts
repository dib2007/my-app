import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetricService } from '../services/MetricService';
import { Metric } from '../models/common';

@Component({
  selector: 'metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit{
  title = 'metrics';
  public metrics: Metric[]

  constructor(private route: ActivatedRoute, private metricService : MetricService) {}
  ngOnInit() {
    this.metricService.metrics = this.route.snapshot.data['metrics'];
    this.metrics = this.route.snapshot.data['metrics'];
    console.log(this.metrics)
  }

  public delete(name: string) {
    this.metricService.deleteMetric(name).subscribe(res => this.onDelete(res))
  }

  onDelete(res : any){
    console.log("Metric deleted")
    this.metricService.getAllMetrics().subscribe(res => {
      console.log("Metrics after delete", res)
      this.metrics = res
    })
  }
}
