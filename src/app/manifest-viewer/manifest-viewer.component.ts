import { Component, OnInit, Input } from '@angular/core';

import { DtManifest } from '../device-type';

@Component({
  selector: 'app-manifest-viewer',
  templateUrl: './manifest-viewer.component.html',
  styleUrls: ['./manifest-viewer.component.css']
})
export class ManifestViewerComponent implements OnInit {

  @Input()
  manifest: DtManifest;

  constructor() { }

  ngOnInit() {
  }

  asRawJson(): string {
    return JSON.stringify(this.manifest, null, ' ');
  }
}
