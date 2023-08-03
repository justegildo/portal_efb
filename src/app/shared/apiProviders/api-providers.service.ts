import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpEvent,  HttpHeaders, HttpRequest } from '@angular/common/http';
import { url as apiUrl } from '../functions/function';
import { map } from 'rxjs';
import { DataProvider } from './data-providers';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiProvidersService {

  PORT: string | null = this.getport();
  Token() {
    const Token = localStorage.getItem('token');
    return Token;
  }

  constructor(
    private _http: HttpClient,
    private _data: DataProvider
  ) { }

  getport() {
    const port = localStorage.getItem('PORT');
    return port;
  }

  private _requestOptions(queryParams?: any): any {
    const o: any = {
      headers: {
        'Content-Type': 'application/json',
      },
      observe: 'response',
      responseType: 'json',
      params: queryParams,
    };

    // let token = localStorage.getItem('token');
    const token = this._data.token;

    if (token) {
      o.headers.Authorization = 'Bearer ' + token;
    }

    return o;
  }


  login(user: User) {
    return this._http
      .post(
        apiUrl('/procedure-d-enregistrement-collectif/v1/users/authenticate'),
        {
          username: user.username,
          password: user.password
        },
        this._requestOptions()
      )
      .pipe(
        map((r: any) => {
          console.log(r);
          console.log(r.body);
          console.log(r.body);
          console.log(r.body.object.token);
          const b = r.body.object;

          if (b.token) {
            this._data.token = b.token;
            return b;
          }
          throw b;
        })
      );
  }

  allFileUploadrequestByUsername(user: string, action: string, statut: string, code: string) {
      console.log(this.Token());
      return this._http
        .get<any>(
          apiUrl(
            '/procedure-d-enregistrement-collectif/v1/uploads/' +
              user +
              '?action=' +
              action +
              '&status=' +
              statut + 
              '&projectCode=' +
              code
          ),
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.Token(),
            },
            observe: 'response',
            responseType: 'json',
          }
        )
        .pipe(
          map((resp: any) => {
            return resp;
          })
        );
    
  }


  getUserInformation(user: any) {
    return this._http.get(apiUrl('/procedure-d-enregistrement-collectif/v1/users/' + user)).pipe(
      map((response) => {
        return response;
      })
    );
  }


  checkGeojsonFileRepport(u: any) {
    return this._http
      .get(apiUrl('/procedure-d-enregistrement-collectif/v1/report/' + u), {
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  checkGeojsonFileRepportComp(u: any) {
    return this._http
      .get(apiUrl('/procedure-d-enregistrement-collectif/v1/comparaisosnReport/' + u), {
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }


  checkGeojsonFileMap(u: any) {
    return this._http
      .get(apiUrl('/procedure-d-enregistrement-collectif/v1/map/' + u))
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }


  uploadFile( 
    geojson: any, proces_verbal: any, repertoire_excel: any, user: any, beginAt: any, endAt: any,
    projectCode: any, publicationLocation: any, action: any, oldFileName: any 
   ): Observable<HttpEvent<any>> {
    const fd: FormData = new FormData();

    fd.append('geojson', geojson);
    fd.append('proces_verbal', proces_verbal);
    fd.append('repertoire_excel', repertoire_excel);
    fd.append('username', user);
    fd.append('beginAt', beginAt);
    fd.append('endAt', endAt);
    fd.append('projectCode', projectCode);
    fd.append('publicationLocation', publicationLocation);
    fd.append('action', action);
    fd.append('oldFileName', oldFileName);
    const httpOption = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.Token(),
      }),
    };

    var request = new HttpRequest(
      'POST',
      apiUrl('/procedure-d-enregistrement-collectif/v1/uploads'),
      fd,
      httpOption
    );

    return this._http.request(request);
  }

}


