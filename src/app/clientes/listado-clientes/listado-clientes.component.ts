import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[]=[];

  constructor(private clientesService: ClientesService, private dataService: ClientesService) { }

  ngOnInit(): void {
    // this.clientes = this.clientesService.getClientes();

    //- - obtener de la bd los registros - -

    //llamar al servicio de firebase (get)
    this.dataService.obtenerRegistrosBD().subscribe(RegistrosObtenidos => {

      this.clientes = Object.values(RegistrosObtenidos); 
      this.dataService.setRegistros(this.clientes);
    });
    


  }

}
