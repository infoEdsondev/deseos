import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent   {

  @ViewChild(IonList) lista : IonList | undefined;
  @Input() terminada = true;

  constructor( public deseosService : DeseosService,
               private router : Router,
               private alertController : AlertController ) { }

  listaSeleccionada(lista : Lista){
    
    if(this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
    console.log(this.terminada);
  }

  borrarLista(lista : Lista){
    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista : Lista){
    const alert = await this.alertController.create({
      header: 'Editar lista',
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
            this.lista?.closeSlidingItems();
          }
        },
        {
          text : 'Actualizar',
          handler : (data)=>{
            console.log(data.titulo);
            if(data.titulo.length===0){
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista?.closeSlidingItems();
          }
        }
      ],
    });

    await alert.present();
  }

  

}
