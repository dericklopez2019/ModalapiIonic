import { Component, OnInit } from '@angular/core';
import { Router ,NavigationExtras} from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  clientes: Cliente[] = [];
  id: number;
  nombre: string;
  email: string;
  telefono: number;
  direccion: string;
  company: string;

  constructor(private router:Router, private service: ClienteService, public modalController: ModalController) {
    service.listar().subscribe(
      data=>{
        this.clientes = data;
        console.log(this.clientes);
    })
  }
  mostrar()
  {
    this.service.guardar({nombreCliente: this.nombre, email: this.email, telefono: this.telefono, direccion: this.direccion, company: this.company }).subscribe(data=>{console.log(data)})
    console.log(this.nombre,this.email,this.telefono,this.direccion, this.company)
  }
  editar(item: any) {
    this.id = item.item.id
    this.nombre = item.item.nombreCliente
    this.email = item.item.email
    this.telefono = item.item.telefono
    this.direccion = item.item.direccion
    this.company = item.item.company
    console.log(item.item.id)

  }
  editarGuardar(){
    this.service.editar({id: this.id, nombreCliente: this.nombre, email: this.email, telefono: this.telefono, direccion: this.direccion, company: this.company}).subscribe(data=>{console.log(data)})
  }
  eliminar(item: any) {
    this.id = item.item.id
    console.log(item.item.id)
    this.service.deletePost(this.id).subscribe(data=> {console.log(data)})
  }
  ngOnInit() {
  }
  goToInicio () {
    this.router.navigate(['home']);

  }
  async modal(cliente: Cliente) {

    const modal = await this.modalController.create( {
      component: ModalPage,
      componentProps: {
        cliente: cliente,

      }

    });
    console.log("Esto va en el modal"+cliente)
    return await modal.present();
  }
  goCliente (cliente: Cliente) :
  void {
    const navigationExtras:  NavigationExtras = {
      state: {
        cliente: cliente,

      }
    };
    this.router.navigate(['modal'],navigationExtras)
  }
}
