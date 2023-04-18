import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  title!: string;
  description!:string;
  createdDate!: Date ;
  snaps!: number ;

  //fonction appelée au moment de la création de chaque instance du composant
  // on doit implémenter l'interface OnInit
  // permet d'initialiser les propriétés
  ngOnInit(){

  }
}
