import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MailHelperService {


  constructor(private http:HttpClient) { }

  sendEmail(request){
    return this.http.post('/api/',request);
  }

}
