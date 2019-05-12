import { Injectable } from "@angular/core";
import { Observable, EMPTY, from, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Response, Server, Metric, domain, PORT } from 'src/app/models/common';
import { MetricService } from './MetricService';


@Injectable()
export class ServerService implements Resolve<Observable<Response>>{
    constructor(private http: HttpClient, private router: Router, private metricService: MetricService) { }

    public servers
    public getAllServer(): Observable<any>{
        return this.http.get(domain + ":" + PORT + "/servers/")
        var response: Response = {
            error: {

            },
            data: [
                {
                    name: 'TEST Server1',
                    ip: '10.0.0.0',
                    uName: 'admin',
                    pass: 'password',
                    status: 'Red'

                },
                {
                    name: 'TEST Server2',
                    ip: '10.0.0.1',
                    uName: 'admin',
                    pass: 'password',
                    status: 'Green'
                }
            ]
        }
        this.servers = response.data
        return Observable.create(observer => {
            observer.next(response);
            observer.complete();
        })
    }

    resolve(): Observable<any> {
        let s = this.getAllServer().pipe(
            catchError(err => {
                this.router.navigate(['/']);
                return EMPTY;
            })
        );
        let m = this.metricService.getAllMetrics()
        let join = forkJoin(s,m).pipe(map((allResponses) => {
            return {
                s : allResponses[0],
                m : allResponses[1]
            }
        }))
        return join
    }

    public createServer(server: Server, mids: string[]): Observable<any> {
        var metrics: Metric[] = []
        mids.forEach(m => {
            metrics.push({
                id: parseInt(m)
            })
        });
        console.log("Selected Metrics", metrics)
        server.metrics = metrics
        console.log("Server to be created ", server)
        return this.http.post(domain + ":" + PORT + "/servers/", server)
    }

    public deleteServer(name: string): Observable<any> {
        console.log("Deleting service with name :", name)
        return this.http.delete(domain + ":" + PORT + "/servers/" + name).pipe(
            catchError(err => {
                window.alert("Unable to delete Server " + name)
                return EMPTY;
            })
        )
    }

    public getServerMetrics(sName : string): Observable<any> {
        console.log("Getting metric for server ", sName)
        return this.http.get(domain + ":" + PORT + "/servers/" + sName + "/metrics/").pipe(
            catchError(err => {
                window.alert("Unable to fetch metrics for server " + sName)
                return EMPTY;
            })
        )
    }
}