import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MailHelperService {


  constructor(private http:HttpClient) { }

  sendEmail(request){
    this.http.post('/api/',request).subscribe((data)=>{
      console.log(data);
    });
  }

}
