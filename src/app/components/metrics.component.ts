import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit{
  title = 'metrics';
  metrics

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.metrics = this.route.snapshot.data['metrics'].data;
    console.log(this.metrics.data)
  }
}
