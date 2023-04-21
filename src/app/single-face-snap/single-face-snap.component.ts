import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap! : FaceSnap ;
  buttonText! : string ;
  constructor(private faceSnapsService:FaceSnapsService, private route : ActivatedRoute) {
  }

  //fonction appelée au moment de la création de chaque instance du composant
  // on doit implémenter l'interface OnInit
  // permet d'initialiser les propriétés
  ngOnInit() {
    this.buttonText = "Oh Snap !" ;
    const snapId = +this.route.snapshot.params['id'] ;
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId)
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
