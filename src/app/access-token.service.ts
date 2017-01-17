import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { Http, Response, URLSearchParams } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class AccessTokenService implements OnInit {
  private publicAccessToken = new BehaviorSubject<string>(null);
  private publicAccessTokenObs: Observable<string>;

  constructor(private oauthService: OAuthService, private http: Http) {

    let url = `${environment.authPublic.url}token`;
    //let body = new URLSearchParams();
    //body.set('grant_type', 'client_credentials');
    //body.set('scope', 'read,write');
    //body.set('client_id', environment.authPublic.clientId);
    //body.set('client_secret', environment.authPublic.clientSecret);
    //let body =`grant_type=client_credential&scope=read,write&client_id=${environment.authPublic.clientId}&client_secret=${environment.authPublic.clientSecret}`;
    //Observable.of<string>('8d1d0a3dd84f488698892a2b4e7ece4a')
    this.publicAccessTokenObs =
      Observable.of(0).concat(Observable.interval(899*1000))
      .switchMap((v) => this.http.get(url))
      .map((r: Response) => {
         console.log("auth public", r.json());
         return r.json().access_token as string
      })
      //TODO refresh every 900s (or better use the value in the response):w
      //.debounceTime(900000)
     // .sample(Rx.Observable.interval(900000))
      .distinctUntilChanged()
      ;
      this.publicAccessTokenObs.subscribe(this.publicAccessToken);
  }

  ngOnInit() {
  }

  getAccessToken() : Observable<string> {
    return this.publicAccessToken.map(v => {
      let user = this.getUserAccessToken();
      return (user != null) ? user : v;
    });
  }

  getUserAccessToken(): string {
    return this.oauthService.getAccessToken()
  }

  getPublicAccessToken(): Observable<string> {
    return this.publicAccessToken.filter(v => v != null)
  }

}
