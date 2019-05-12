import { Component, OnInit } from '@angular/core';
import { Metric } from '../models/common';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MetricService } from '../services/MetricService';
import { Router } from '@angular/router';

@Component({
    selector: 'new-metric',
    templateUrl: './new-metric.component.html',
    styleUrls: ['./new-metric.component.css']
})
export class NewMetricsComponent {
    metric: Metric
    public createMetricForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private metricService: MetricService, private router: Router) {
        this.initForm()
    }

    initForm() {
        this.createMetricForm = this.formBuilder.group({
            name: new FormControl(),
            command: new FormControl(),
            output: new FormControl()
        })
    }

    onSubmit() {
        try {
            console.log(this.createMetricForm.value);
            this.metricService.createNew({
                name: this.createMetricForm.get('name').value,
                command: this.createMetricForm.get('command').value,
                output: this.createMetricForm.get('output').value
            }).subscribe(res => this.onCreate());
        } catch (e) {
            console.error(e)
        }
    }

    onCreate() {
        console.log("Metric Created .....")
        this.router.navigate(['metrics']);
    }
}
