import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { OrderDetail } from './order-detail.model';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderDetailService {

  private entityUrl = 'api/order-details/';

  constructor(private http: Http) {

  }

  getAll(): Observable<OrderDetail[]> {
    return this.http.get(this.entityUrl)
      .map(this.checkStatus)
      .map(response => response.json() as OrderDetail[])
      .catch(this.handleError);
  }

  getById(id: string): Observable<OrderDetail> {
    return this.http.get(this.entityUrl + id)
      .map(this.checkStatus)
      .map(response => response.json() as OrderDetail)
      .catch(this.handleError);
  }

  insert(orderDetail: OrderDetail): Observable<any> {
    return this.http.post(this.entityUrl, orderDetail)
      .map(this.checkStatus)
      .catch(this.handleError);
  }

  update(id: string, orderDetail: OrderDetail) {
    return this.http.put(this.entityUrl + id, orderDetail)
          .map(this.checkStatus)
          .catch(this.handleError);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.entityUrl + id)
      .map(this.checkStatus)
      .catch(this.handleError);
  }

  private checkStatus(response: Response) {
    const status = response.status;
    if (status === 200 || status === 201 || status === 204) {
      return response;
    }
    throw response;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.msg || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.log(error);
    return Observable.throw(errMsg);
  }
}