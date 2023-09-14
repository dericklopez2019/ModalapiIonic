import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getUrl(key: any): string {
    return Env.host + Env.url[key];
  }
}


export const Env={
  host:'http://localhost:3000/api', //ip local

  url: {
    clienteListar:'/clientes',
    clienteGuardar:'/clientes',
    clienteEditar:'/clientes',
    clienteElliminar:'/clientes'
  }

}
