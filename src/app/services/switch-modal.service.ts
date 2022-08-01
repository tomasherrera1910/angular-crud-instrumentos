import { EventEmitter, Injectable } from '@angular/core';
import { Instrumento } from '../models/instrumento';
@Injectable({
  providedIn: 'root'
})
export class SwitchModalService {

  constructor() { }
  $modal = new EventEmitter<any>();
  $instrumentoEditar = new EventEmitter<Instrumento>();
}
