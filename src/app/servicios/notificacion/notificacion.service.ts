import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private toastr: ToastrService) { }

  mostrarMensaje(tipo, titulo, mensaje) {
    switch (tipo) {
      case 'success':
        this.toastr.success(mensaje, titulo, { closeButton: true, progressBar: true });
        break;

      case 'error':
        this.toastr.error(mensaje, titulo, { closeButton: true, progressBar: true });
        break;

      case 'info':
        this.toastr.info(mensaje, titulo, { closeButton: true, progressBar: true });
        break;

      default:
        break;
    }

  }
}
