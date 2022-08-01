import { Component, Input, OnInit} from '@angular/core';
import { InstrumentoService } from 'src/app/services/instrumento.service';
import { SwitchModalService } from 'src/app/services/switch-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  @Input() instrumentoEditar: any;
  constructor(private modalSwitch: SwitchModalService, public instrumentoService: InstrumentoService) { }

  ngOnInit(): void {
  }
  
  closeModal(){
    this.modalSwitch.$modal.emit(false)
  }
  addOrEditInstrumento(){
    if(this.instrumentoEditar.id){ //EDIT CASE
      console.log(this.instrumentoEditar.id)
      this.instrumentoService.putInstrumento(this.instrumentoEditar).subscribe({
        next: () => {window.location.reload()},
        error: (err) => console.error(err)
      })
    }else{ //NEW CASE
      console.log(this.instrumentoEditar)
      this.instrumentoService.postInstrumento(this.instrumentoEditar).subscribe({
        next: () => {window.location.reload()},
        error: (err) => console.error(err)
      })
    }
  }
}
