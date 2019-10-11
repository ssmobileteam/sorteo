import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private participantes;
  private ganador;
  constructor(private storage: Storage,public loadingController: LoadingController) {}

  async sortear(){
    const loading = await this.loadingController.create({
      message: 'Sorteando...',
      duration: 2500
    });

    await loading.present();
    await loading.onDidDismiss();

    this.participantes = await this.storage.get('participantes');
    let indice = Math.floor(Math.random() * this.participantes.length);
    this.ganador = this.participantes[indice];
  }

}
