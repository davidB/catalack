import { Injectable } from '@angular/core';
import { Device } from './device';
import { DEVICES } from './mock-devices';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import gql from 'graphql-tag';

import 'rxjs/add/operator/map';

// We use the gql tag to parse our query string into a query document
const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
    currentUser {
      login
      avatar_url
    }
  }
`;
const DevicesByUid = gql`
  query DevicesByUid {
    device {
      id
      name
    }
  }
`;

@Injectable()
export class DeviceService {

  constructor(private apollo: Angular2Apollo) {}

  // currentUser() {
  //   this.apollo.watchQuery({
  //     query: CurrentUserForProfile
  //   }).subscribe(({data}) => {
  //     this.currentUser = data.currentUser;
  //   });
  // }

  findDevices(): Promise<Device[]> {
    return Promise.resolve(DEVICES);
  }

  findDevicesByUid(uid: string): ApolloQueryObservable<any> {
    return this.apollo.watchQuery({ query: DevicesByUid });
      //.map(({data}) => data.feed);
  }

  findDevice(id: string): Promise<Device> {
    return this.findDevices()
               .then(l => l.find(v => v.id === id));
  }
}
