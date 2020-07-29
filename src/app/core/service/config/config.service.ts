import { Injectable } from '@angular/core';

export type Config = {
  apiUri: string;
  imagesUri: string;
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // config: Config = {
  //   apiUri: 'http://3.128.94.248:3000/api',
  //   imagesUri: 'http://3.128.94.248:3000',
  // };

  config: Config = {
    apiUri: 'http://localhost:3000/api',
    imagesUri: 'http://localhost:3000',
  };

  constructor() {}
}
