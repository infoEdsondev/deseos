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
    this.cargarStorage();
    console.log(this.listas); 
  }

  crearLista(titulo : string){
    let nuevalista = new Lista(titulo);
    this.listas.push(nuevalista);
    this.guardarStorage();
    return nuevalista.id;
  }

  cargarLista( id : string | number){
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id );
  }

  borrarLista(lista : Lista){
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id );
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
