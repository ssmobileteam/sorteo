import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private nombre:string;
  private participantes:Array<any>=[];
  constructor(private storage: Storage) {}

  async agregarParticipante(){
    let storageParticipantes = await this.storage.get('participantes');
    if (storageParticipantes) {
      storageParticipantes.push(this.nombre);
      await this.storage.set('participantes',storageParticipantes);
    } else {
      await this.storage.set('participantes',[this.nombre]);
    }
    this.buscarParticipantes();
  }

  async buscarParticipantes(){
    this.participantes = await this.storage.get('participantes');
  }

  ionViewDidEnter(){
    this.buscarParticipantes();
  }

}
