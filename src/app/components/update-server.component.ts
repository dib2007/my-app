import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/ServerService';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../models/common';

@Component({
  selector: 'app-update-server',
  templateUrl: './update-server.component.html',
  styleUrls: ['./update-server.component.css']
})
export class UpdateServerComponent implements OnInit {

  public server : Server
  constructor(private route : ActivatedRoute, private serverService : ServerService) { }

  ngOnInit() {

    this.serverService.servers.forEach((server: Server) => {
      if(server.name == this.route.snapshot.params.name){
          this.server = server
      }
  });
  }

}
