import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas : Lista[] = [];

  constructor() { 
    //const lista1 = new Lista('Recolectar piedras del infinito');
    //const lista2 = new Lista('Heroes a desaparecer');
    //this.listas.push(lista1, lista2);
    //console.log(this.listas); 
    this.cargarStorage();
  }

  crearLista(titulo : string){
    let nuevalista = new Lista(titulo);
    this.listas.push(nuevalista);
    this.guardarStorage();
  }

  cargarStorage(){
    if( localStorage.getItem('data') ){
      this.listas = JSON.parse(localStorage.getItem('data')!);
    }
    
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

}
