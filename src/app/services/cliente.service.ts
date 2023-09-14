import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable, tap } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlListar:string
  private urlGuardar: string
  private urlEditar: string
  private urlEliminar: string

  constructor(private http:HttpClient, private config:ConfigService) {
    this.urlListar = this.config.getUrl('clienteListar');
    this.urlGuardar = this.config.getUrl('clienteGuardar');
    this.urlEditar = this.config.getUrl('clienteEditar');
    this.urlEliminar = this.config.getUrl('clienteElliminar');

  }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlListar, {})
      .pipe(tap(data => {
        return data;
      }));

  }

  guardar(body: any){
    return this.http.post(this.urlGuardar,body)}

  editar(body: any){
    return this.http.put(this.urlEditar, body)
  }
  deletePost(id){
    return this.http.delete(this.urlEliminar+'/'+id);
  }
}
