import { Injectable } from "@angular/core";
import { Observable, EMPTY, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Response } from 'src/app/models/common';


@Injectable()
export class MetricService implements Resolve<Observable<Response>>{
constructor(private http:HttpClient, private router: Router){}

    public metrics
    public getAllMetrics(): Observable<Response> {
        
        var response: Response = {
            error : {

            },
            data : [
                {
                    name : 'TEST METRIC1',
                    command : 'COMMAND1',
                    output : 'SOME REGEX',
                    createdBy : 'Dibyendu',
                    updatedBy : 'Dibyendu',
                    lastUpdateTime: '2013-11-11',
                    status: 'Red'
                },
                {
                    name : 'TEST METRIC2',
                    command : 'COMMAND3',
                    output : 'SOME REGEX',
                    createdBy : 'Dibyendu',
                    updatedBy : 'Dibyendu',
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

    resolve (): Observable<Response | null> {
        return this.getAllMetrics().pipe(
          catchError(err => {
            this.router.navigate(['/']);
            return EMPTY;
          })
        );
      }
}