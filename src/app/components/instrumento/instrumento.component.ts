import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from 'src/app/services/switch-modal.service';
import {InstrumentoService} from '../../services/instrumento.service'
import { Instrumento } from 'src/app/models/instrumento';

const INSTRUMENTO_INITIAL={
  nombre:"",
  marca:"",
  modelo:"",
  cantidadVendida:0,
  costoEnvio:0,
  descripcion:"",
  imagen:"",
  precio:0
};

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html'
})
export class InstrumentoComponent implements OnInit {
  
  constructor(public instrumentoService: InstrumentoService, private switchModal: SwitchModalService) { }
  modal:boolean = false;
  search:string = "";
  instrumentoSeleccionado:any = INSTRUMENTO_INITIAL;
  
  ngOnInit(): void {
    this.getInstrumentos()
    this.switchModal.$modal.subscribe((valor) => this.modal = valor)
  }
  
  getInstrumentos(){
    this.instrumentoService.getInstrumentos().subscribe({
      next: (res) => this.instrumentoService.instrumentos = res,
      error: (err) => console.error(err)
    })
  }
  deleteInstrumento(id: string){
    if(confirm()){
    this.instrumentoService.deleteInstrumento(id).subscribe({
      next: () => this.getInstrumentos(),
      error: (err) => console.error(err)
    })
    }
  }
  openModal(){
    this.instrumentoSeleccionado= INSTRUMENTO_INITIAL
    this.modal = true
  }
  editar(instrumento: Instrumento){
    this.instrumentoSeleccionado = instrumento;
    this.modal=true
  }
  buscarInstrumento(){
    this.instrumentoService.getInstrumentos().subscribe({
      next: (res) => {
        this.instrumentoService.instrumentos = res.filter(instrumento => instrumento.nombre.toLowerCase().includes(this.search.toLowerCase()))
      },
      error: (err) => console.error(err)
    })
  }
}
