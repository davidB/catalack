import { environment } from '../environments/environment';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { ApolloClient, createNetworkInterface, createBatchingNetworkInterface} from 'apollo-client';
import { Angular2Apollo } from 'angular2-apollo';

// Polyfill fetch
//import 'whatwg-fetch';

interface Result {
  id?: string;
  __typename?: string;
}

export function apolloClientFactory(oauthService: OAuthService){
  const networkInterface: any = createNetworkInterface({
    uri: environment.api.graphql,
  //  batchInterval: 10,
  //  opts: {
  //    credentials: 'same-origin',
  //  }
  });
  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};  // Create the header object if needed.
      }
      // get the authentication token from local storage if it exists
      req.options.headers.authorization = this.oauthService.getAccessToken();
      //localStorage.getItem('token') || null;
      next();
    }
  }]);

  //const wsClient: Client = new Client('ws://localhost:8080');
  //
  //const networkInterfaceWithSubscriptions: any = addGraphQLSubscriptions(
  //  networkInterface,
  //  wsClient,
  //);

  let client: ApolloClient = new ApolloClient({
    //networkInterface: networkInterfaceWithSubscriptions,
    networkInterface: networkInterface,
    dataIdFromObject: (result: Result) => {
      if (result.id && result.__typename) {
        return result.__typename + result.id;
      }
      return null;
    }
  });
  
  return client
};

export let ApolloClientProvider = {
  provide: ApolloClient,
  useFactory: apolloClientFactory,
  deps: [OAuthService]
};

export function angular2ApolloFactory(apolloClient: ApolloClient) {
   return new Angular2Apollo(apolloClient)
};

export let Angular2ApolloProvider = {
  provide: Angular2Apollo,
  useFactory: angular2ApolloFactory,
  deps: [ApolloClient]
};
