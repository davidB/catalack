export interface DeviceType {
  id: string;
  name: string;
  uniqueName: string;
  oid: string;
  uid: string;
  description: string;
  "protected": boolean;
  hasCloudConnector: boolean;
  lastUpdated: number;
}

export interface DtManifest {
  version: number;
  properties: DtProperties,
  actions: any,
}

export interface DtProperties {
  field: { [key:string]:DtField; },
}

export interface DtField {
  "type": string,
  unit: string,
  isCollection: boolean,
  description: string,
  children: { [key:string]:DtField; },
}
