import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: String = 'http://localhost:1337/'

  headers = new HttpHeaders({
    'authorization': 'Bearer ' + localStorage.getItem('token')
  })

  constructor(public http: HttpClient) { }



  getHeader(token) {
   return this.headers = new HttpHeaders({
      'authorization': 'Bearer ' + token
    })
  }

  get(endpoint: string, parametros: any) {
    var params = new HttpParams()
    for (let k in params) {
      params.set(k, params[k]);
    }

    return this.http.get(this.url + endpoint, { headers: this.getHeader(localStorage.getItem('token')), params: params });
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    console.log(body);
    return this.http.post(environment.urlServidor + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(environment.urlServidor + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(environment.urlServidor + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(environment.urlServidor + '/' + endpoint, body, reqOpts);
  }
}
