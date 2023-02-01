import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})


export class FileService {

 private readonly resourceUrl=environment.api
  constructor( private http:HttpClient){

  }
  uploadFile(formData:FormData):Observable<any>{
    return this.http.post(`${this.resourceUrl}upload`,formData);
  }
}
