import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Instrumento } from '../models/instrumento'; 
@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  URL_BACKEND = "http://localhost:3001/instrumentos"
  instrumentos: Instrumento[] = []
  
  constructor(private http: HttpClient) { }
  
  getInstrumentos(){
    return this.http.get<Instrumento[]>(this.URL_BACKEND)
  }
  postInstrumento(data:any){
    return this.http.post(this.URL_BACKEND, data)
  }
  putInstrumento(data:any){
    return this.http.put(`${this.URL_BACKEND}/${data.id}`, data)
  }
  deleteInstrumento(id:string){
    return this.http.delete(`${this.URL_BACKEND}/${id}`)
  }
}
