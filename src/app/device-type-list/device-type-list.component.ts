import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import '../rxjs-extensions';

import { DeviceType }  from '../device-type';
import { DeviceTypeService } from '../device-type.service';

@Component({
  selector: 'app-device-type-list',
  templateUrl: './device-type-list.component.html',
  styleUrls: ['./device-type-list.component.css']
})
export class DeviceTypeListComponent implements OnInit {
  private searchTerms = new Subject<string>();
  deviceTypes: Observable<DeviceType[]>;

  constructor(private deviceTypeService: DeviceTypeService, private router: Router) { }

  ngOnInit() {
    this.setupDeviceTypes();
  }

  setupDeviceTypes() {
    this.deviceTypes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => {   // switch to new observable each time
        console.log("switchMap term:", term);
        return this.deviceTypeService.search(term)
      })
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        this.setupDeviceTypes();
        return Observable.of<DeviceType[]>([]);
      });
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(deviceType: DeviceType): void {
    let link = ['/device', deviceType.id];
    this.router.navigate(link);
  }

}
