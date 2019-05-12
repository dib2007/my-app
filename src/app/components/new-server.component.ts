import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Server } from '../models/common';
import { ServerService } from '../services/ServerService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent implements OnInit {

  public newServerForm: FormGroup
  constructor(private formBuilder: FormBuilder, private serverService: ServerService, private router: Router, private route: ActivatedRoute) { }
  public metrics

  ngOnInit() {
    this.initForm()
    this.metrics = this.route.snapshot.data['metrics'];
    console.log("Metrics ", this.metrics)
  }

  initForm() {
    this.newServerForm = this.formBuilder.group({
      name: new FormControl(),
      ip: new FormControl(),
      uName: new FormControl(),
      password: new FormControl(),
      metrics: new FormControl()
    })

  }

  public onSubmit() {
    try {
      console.log(this.newServerForm.value);
      this.serverService.createServer({
        name: this.newServerForm.get('name').value,
        ip: this.newServerForm.get('ip').value,
        username: this.newServerForm.get('uName').value,
        password: this.newServerForm.get('password').value
      }, this.newServerForm.get('metrics').value).subscribe(res => this.onCreate());
    } catch (e) {
      console.error(e)
    }
    /* this.serverService.createServer({

    }) */
  }


  onCreate() {
    console.log("Server Created .....")
    this.router.navigate(['servers']);
  }
}
