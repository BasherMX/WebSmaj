import { Injectable } from '@angular/core';
import { DataServices } from '../data.services';
import { Cliente, Grupo } from './cliente.model';
import { GRUPOS } from './grupo';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private clientes: Cliente[]=[];
  private grupos: Grupo[] = GRUPOS;

  constructor(private dataService: DataServices) {
    // this.clientes = JSON.parse(localStorage.getItem("data") || '[]');

  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  setRegistros(misRegistros:Cliente[]){
    this.clientes = misRegistros;
  }

  obtenerRegistrosBD(){
    return this.dataService.obtenerRegistrios();
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    // localStorage.setItem('data',JSON.stringify(this.clientes)); //<- guarda en el localstorage

    //llamar al servicio de firebase (put)
    this.dataService.guardarRegistros(this.clientes);

  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      telefono: '',
      fechaNac: '',
      militancia: '',
    };
  }

  
}
