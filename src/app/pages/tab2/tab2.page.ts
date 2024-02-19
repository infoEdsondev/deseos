import { Component } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listas : Lista[] = [];
  constructor( public deseosService : DeseosService){
    this.listas = deseosService.listas;
  }
}
