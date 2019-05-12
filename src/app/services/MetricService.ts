import { Injectable } from "@angular/core";
import { Observable, EMPTY, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Response, Metric, domain, PORT } from 'src/app/models/common';
import { throwError } from 'rxjs';


@Injectable()
export class MetricService implements Resolve<Observable<any>>{
    constructor(private http: HttpClient, private router: Router) { }

    public metrics
    public getAllMetrics(): Observable<any>{

        return this.http.get(domain + ":" + PORT + "/metrics/")
        var response: Response = {
            error: {

            },
            data: [
                {
                    name: 'TEST METRIC1',
                    command: 'COMMAND1',
                    output: 'SOME REGEX',
                    createdBy: 'Dibyendu',
                    updatedBy: 'Dibyendu',
                    lastUpdateTime: '2013-11-11',
                    status: 'Red'
                },
                {
                    name: 'TEST METRIC2',
                    command: 'COMMAND3',
                    output: 'SOME REGEX',
                    createdBy: 'Dibyendu',
                    updatedBy: 'Dibyendu',
                    lastUpdateTime: '2013-11-11',
                    status: 'Green'
                }
            ]
        }
        this.metrics = response.data
        return Observable.create(observer => {
            observer.next(response);
            observer.complete();
        })
    }

    public createNew(metric: Metric): Observable<any> {
        return this.http.post(domain + ":" + PORT + "/metrics/", metric).pipe(
            catchError(error => throwError(error))
        );
    }

    resolve(): Observable<any> {
        return this.getAllMetrics().pipe(
            catchError(err => {
                this.router.navigate(['/']);
                return EMPTY;
            })
        );
    }

    public deleteMetric(name: string): Observable<any> {
        console.log("Deleting metric with name :", name)
        return this.http.delete(domain + ":" + PORT + "/metrics/" + name).pipe(
            catchError(err => {
                window.alert("Unable to delete Metric " + name)
                return EMPTY;
            })
        )
    }
}