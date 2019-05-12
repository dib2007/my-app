import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { ServerService } from '../services/ServerService';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ServerMetricResolver implements Resolve<Observable<any>>{

    constructor(private serverService: ServerService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        let serverName = route.params.sName
        console.log("Getting metrics for server ", serverName)
        return this.serverService.getServerMetrics(serverName).pipe(
            catchError(err => {
                console.log(err)
                return EMPTY;
            })
        );
    }

}