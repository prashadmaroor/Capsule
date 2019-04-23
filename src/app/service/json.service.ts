import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestOptions , Headers} from '@angular/http';
import { Observable } from 'rxjs/internal/observable';
import { catchError } from 'rxjs/operators';
import { Task } from 'src/app/model/task';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
  
  JSON_URL:string =  'http://localhost:3000/taskObject';

  constructor(private httpClient:HttpClient) { }

  getData():Observable<any>{
    let observables=this.httpClient.get(this.JSON_URL);
     return observables;
    }

  updateEndDate(data:Task):Observable<any>
  {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }
  console.log(this.JSON_URL+ '/' +data.id);
  let observables= this.httpClient.put(this.JSON_URL+ '/' +data.id, data, httpOptions);
  return observables;    
}


insertData(data:Task):Observable<any>{
  let observables = this.httpClient.post(this.JSON_URL,data)
  return observables;
}

getDataByID(id:string):Observable<any>{
  let observables=this.httpClient.get(this.JSON_URL + '/' + id);
  return observables;
}

}
