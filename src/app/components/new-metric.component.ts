import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetricService } from '../services/MetricService';
import { Metric } from '../models/common';

@Component({
  selector: 'new-metric',
  templateUrl: './new-metric.component.html',
  styleUrls: ['./new-metric.component.css']
})
export class NewMetricsComponent implements OnInit{
    metric : Metric
    constructor(private route : ActivatedRoute, private metricService : MetricService){}
    ngOnInit(): void {
        this.metricService.metrics.array.forEach((metric: Metric) => {
            if(metric.name == this.route.snapshot.params.name){
                this.metric = metric
            }
        });
    } 
}
