import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetricService } from '../services/MetricService';
import { Metric } from '../models/common';

@Component({
  selector: 'app-update-metric',
  templateUrl: './update-metric.component.html',
  styleUrls: ['./update-metric.component.css']
})
export class UpdateMetricComponent implements OnInit {


  public metric : Metric
  constructor(private route : ActivatedRoute, private metricService : MetricService) { }

  ngOnInit() {
    
    this.metricService.metrics.forEach((metric: Metric) => {
      if(metric.name == this.route.snapshot.params.name){
          this.metric = metric
      }
  });
  }

}
