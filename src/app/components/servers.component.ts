import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/ServerService';
import { Server, Metric } from '../models/common';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  title = 'servers';

  public servers: Server[]
  public metrics: Metric[]

  constructor(private route: ActivatedRoute, private serverService: ServerService) { }
  ngOnInit() {
    let sm = this.route.snapshot.data['sm'];
    this.servers = sm.s
    this.metrics = sm.m
    this.serverService.servers = this.servers;
    console.log(this.servers)
    console.log(this.metrics)
  }

  public deleteServer(name: string) {
    this.serverService.deleteServer(name).subscribe(res => {
      this.onDelete()
    });
  }

  onDelete() {
    this.serverService.getAllServer().subscribe(res => {
      this.servers = res
    });
  }
}
