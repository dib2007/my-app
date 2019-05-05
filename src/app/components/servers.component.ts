import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  title = 'servers';

  metrics

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.metrics = this.route.snapshot.data['metrics'].data;
    console.log(this.metrics.data)
  }
}
