import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService : DeseosService,
               private router : Router,
               private alertController : AlertController){
    
  }

  async agregarLista(){
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name : 'titulo', 
          type : 'text',
          placeholder : 'Nombre de la Lista'
        }
      ],
      buttons: [
        {
          text : 'Cancelar',
          role : 'cancel',
          handler : ()=>{
            console.log('cancelado');
          }
        },
        {
          text : 'Crear',
          handler : (data)=>{
            console.log(data.titulo);
            if(data.titulo.length===0){
              return;
            }
            let listaId = this.deseosService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ],
    });

    await alert.present();
  }

  

}
