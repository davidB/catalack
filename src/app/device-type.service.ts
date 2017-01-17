import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';
import { DeviceType, DtManifest } from './device-type';
import { AccessTokenService } from './access-token.service'

@Injectable()
export class DeviceTypeService {

  constructor(private http: Http, private accessTokenService: AccessTokenService) { }
//{"data":{"id":"fitbit_flex","oid":"8d62e034c76247809ee48ff456fbaa65","uid":"10024","name":"zz_OLD_fitbit_flex","published":true,"approved":true,"protected":true,"latestVersion":3,"uniqueName":"fitbit_flex","vid":"0","rsp":false,"issuerDn":null,"description":null,"inStore":false,"hasCloudConnector":true,"latestCloudConnectorVersion":1,"billingSubscriptionId":"sub_7iQ94o25ZxWocR","lastUpdated":1454420127000,"ownedByCurrentUser":false}}
  findDeviceType(id: string): Observable<DeviceType> {
    return this.accessTokenService.getPublicAccessToken().switchMap( token => {
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization' : `bearer ${token}`});
      return this.http.get(`${environment.api.rest}devicetypes/${id}?productInfo=true`, {headers: headers})
    })
    //.do((r) => console.log("resp", r.json()))
    .map((r: Response) => r.json().data as DeviceType)
    // .toPromise()
    ;
  }
  findManifest(id: string): Promise<DtManifest> {
    return this.accessTokenService.getPublicAccessToken().switchMap( token => {
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization' : `bearer ${token}`});
      return this.http.get(`${environment.api.rest}devicetypes/${id}/manifests/latest/properties`, {headers: headers})
    })
      .map((r: Response) => {
        console.log(r.json());
        return r.json().data as DeviceType
      })
      .toPromise()
      ;

  }

  search(nameFilter: string): Observable<DeviceType[]> {
    return this.accessTokenService.getPublicAccessToken().switchMap( token => {
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization' : `bearer ${token}`});
      return this.http.get(`${environment.api.rest}devicetypes?count=100&nameSearch=${nameFilter}`, {headers: headers})
    })
      .map((r: Response) => {
        console.log(r.json());
        return r.json().data.deviceTypes as DeviceType[]
      })
      ;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
