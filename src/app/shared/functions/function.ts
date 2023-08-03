import { /*baseURL, */baseUrls } from './const';

// tslint:disable-next-line:typedef
export function url(path: string) {
    return baseUrls+path;
   // return baseURL+path;
  /* if(baseUrls) {
    return baseUrls + path;
  } else {
    return baseURL + path;
  }  */
}
