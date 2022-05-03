// Este servicio guardara datos en firebase

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "./clientes/cliente.model";


@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}


    obtenerRegistrios(){

        return this.httpClient.get('https://mis-clientes-8634f-default-rtdb.firebaseio.com/datos.json');

    }

    guardarRegistros(clientes: Cliente[]){

        //enviar la informacion
        this.httpClient.put('https://mis-clientes-8634f-default-rtdb.firebaseio.com/datos.json',clientes).subscribe(

            response => console.log("Registro agregado " + response),
            error => console.log("error: " + error),

        ); 

    }

}