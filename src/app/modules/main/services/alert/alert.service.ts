import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alertDeleteTraining(){
    Swal.fire({
      title: 'Deseja excluir o treinamento?',      
      showCancelButton: true,
      confirmButtonText: 'Sim',      
      cancelButtonText:'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Excluido!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Não excluido', '', 'info')
      }
    })}
}
