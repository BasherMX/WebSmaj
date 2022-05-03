import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente={
    id: 0,
    nombre: "",
    telefono:"",
    fechaNac: "",
    militancia: ""
  };
  grupos: Grupo[]=[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    
    if(this.cliente.nombre != "" && this.cliente.telefono != "" && this.cliente.fechaNac != "" && this.cliente.militancia != ""){
      Swal.fire({
        title: 'Registro completado',
        text: 'Gracias ' + this.cliente.nombre,
        icon: 'success',
        confirmButtonText: 'Ok',
        timer:3000,
        timerProgressBar: true,
        width:'40rem',
        padding: '2rem'
      })
      this.clientesService.agregarCliente(this.cliente);
      this.cliente = this.clientesService.nuevoCliente();
    }else{
      Swal.fire({
        title: 'Existen Campos vacios',
        text: 'Porfavor rellena todos los espacios',
        icon: 'error',
        confirmButtonText: 'Cerrar',
        timer:2500,
        timerProgressBar: true,
        width:'40rem',
        padding: '2rem'
      })

    }
    
  }
}