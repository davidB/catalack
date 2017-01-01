import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular2-oauth2/oauth-service';

@Component({
  selector: 'app-auth-btn',
  templateUrl: './auth-btn.component.html',
  styleUrls: ['./auth-btn.component.css']
})
export class AuthBtnComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
  }

  ngOnInit() {
    // Login-Url
    this.oauthService.loginUrl = "https://accounts-dev.artik.cloud/authorize"; //Id-Provider?
    
    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin + "/";
      
    // The SPA's id. Register SPA with this id at the auth-server
    this.oauthService.clientId = "ebf1b426ca854ffcb7ccdef90505ee31";
    
    // The name of the auth-server that has to be mentioned within the token
    //this.oauthService.issuer = "https://api-dev.artik.cloud/users/self";

    // set the scope for the permissions the client should request
    this.oauthService.scope = "";
    
    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = false;
    
    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(sessionStorage);
    
    // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
    this.oauthService.logoutUrl = "https://accounts-dev.artik.cloud/logout?redirect_uri="+ window.location.origin +"/&token={{access_token}}";
    
    // This method just tries to parse the token within the url when
    // the auth-server redirects the user back to the web-app
    // It dosn't initiate the login
    this.oauthService.tryLogin({
      // onTokenReceived: context => {
      //   //
      //   // Output just for purpose of demonstration
      //   // Don't try this at home ... ;-)
      //   // 
      //   console.debug("logged in");
      //   console.debug(context);
      // }
    });
  }
  
  public login() {
    this.oauthService.initImplicitFlow();
  }
  
  public logoff() {
    this.oauthService.logOut();
  }
  
  public get accessToken() {
    return this.oauthService.getAccessToken()
  }


}
