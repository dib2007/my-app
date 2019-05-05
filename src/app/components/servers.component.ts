import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  title = 'servers';

  servers

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.servers = this.route.snapshot.data['servers'].data;
    console.log(this.servers.data)
  }
}
