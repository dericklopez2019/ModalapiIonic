import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.page.html',
  styleUrls: ['./nueva.page.scss'],
})
export class NuevaPage implements OnInit {

  constructor( public alertController: AlertController, public modalController: ModalController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Prueba de alert",
      message: " Esto es una prueba",
      buttons: ["Ok"],

    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: "Prueba de alert",
      message: " ¿Estas seguro?",
      buttons: [{
          text: 'No',
          handler: ()=>{
            console.log(" No cancel")
          }
      },
      {
        text: 'Si',
        handler: ()=>{
          console.log(" Cancelar")
        }
      }
    ]

    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async modal() {
    const modal = await this.modalController.create( {
      component: ModalPage,
      componentProps: {
        key:'valor'
      }
    });
    return await modal.present();
  }
}
