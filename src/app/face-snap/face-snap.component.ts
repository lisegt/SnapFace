import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap ;
  constructor(private faceSnapsService:FaceSnapsService) {
  }

  buttonText! : string ;

  //fonction appelée au moment de la création de chaque instance du composant
  // on doit implémenter l'interface OnInit
  // permet d'initialiser les propriétés
  ngOnInit() {
    this.buttonText = "Oh Snap !" ;
  }

  onSnap(){
    if (this.buttonText === 'Oh Snap !'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = "Oops, un snap !"
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = "Oh Snap !"
    }
  }
}
