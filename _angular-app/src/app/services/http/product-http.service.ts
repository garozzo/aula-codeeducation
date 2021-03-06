import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Product } from '../../model';
import { HttpResource, SearchParams } from './http-resource';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService implements HttpResource<Product> {

  //private baseUrl = 'http://localhost:8000/api/products';
  private baseUrl = `${environment.api.url}/products`;

  constructor(private http: HttpClient) { }

  list(searchParams: SearchParams) : Observable<{data: Array<Product>, meta: any }> {
    const token = window.localStorage.getItem('token');

    const sParams: any = {
      page: searchParams.page + "",
    };
    if(searchParams.all) {
      sParams.all = 'all';
      delete sParams.page;
    }

    const params = new HttpParams({
      fromObject: sParams
    });

    return this.http.get<{data: Array<Product>, meta: any }>(this.baseUrl, {
        params,
        headers: {
          'Authorization': 'Bearer ' + token
        }
    });
  }

  get(id: number) : Observable<Product> {
    const token = window.localStorage.getItem('token');

    return this.http.get<{data: Product }>(`${this.baseUrl}/${id}`, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    })
    .pipe(
      map(response => response.data)
    );
  }

  create(data: Product) : Observable<Product> {
    const token = window.localStorage.getItem('token');

    return this.http.post<{data: Product }>(this.baseUrl, data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .pipe(
        map(response => response.data)
      );
  }

  update(id: number, data: Product) : Observable<Product> {
    const token = window.localStorage.getItem('token');

    return this.http.put<{data: Product }>(`${this.baseUrl}/${id}`, data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .pipe(
        map(response => response.data)
      );
  }

  destroy(id: number) : Observable<any> {
    const token = window.localStorage.getItem('token');

    return this.http.delete(`${this.baseUrl}/${id}`, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    });
  }

}
