import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {  Validators, FormBuilder, FormGroup   } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  cliente: Cliente;
  formCliente: FormGroup;

  constructor(private fb: FormBuilder,
    private modalController: ModalController,
    private navParams: NavParams,
    private router:Router
  ) {
    this.formCliente = this.fb.group({
      nombreCliente: ['', [ Validators.required]],
      email: ['', Validators.email],
      telefono: ['' ,[Validators.required]],
      direccion: ['',[Validators.required]],
      company: [''],

    });
   }
  submitForm() {

    this.modalController.dismiss();
  }
  ngOnInit()
  {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      cliente: Cliente,

    };
    this.cliente = state.cliente;
    console.log(this.cliente);
    this.formCliente.patchValue({
      id: this.cliente.id,
      nombreCliente: this.cliente.nombreCliente,
      email: this.cliente.email,
      telefono: this.cliente.telefono,
      direccion: this.cliente.direccion,
      company: this.cliente.company
    });
  }

}
