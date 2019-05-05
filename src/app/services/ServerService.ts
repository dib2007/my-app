import { Injectable } from "@angular/core";
import { Observable, EMPTY, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Response } from 'src/app/models/common';


@Injectable()
export class ServerService implements Resolve<Observable<Response>>{
constructor(private http:HttpClient, private router: Router){}

    public servers
    public getAllServer(): Observable<Response> {
        
        var response: Response = {
            error : {

            },
            data : [
                {
                    name : 'TEST Server1',
                    ip : '10.0.0.0',
                    uName : 'admin',
                    pass : 'password',
                    status: 'Red'
                    
                },
                {
                    name : 'TEST Server2',
                    ip : '10.0.0.1',
                    uName : 'admin',
                    pass : 'password',
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

    resolve (): Observable<Response | null> {
        return this.getAllServer().pipe(
          catchError(err => {
            this.router.navigate(['/']);
            return EMPTY;
          })
        );
      }
}