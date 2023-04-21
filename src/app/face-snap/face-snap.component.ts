import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap ;
  constructor(private faceSnapsService:FaceSnapsService, private router:Router) {
  }

  buttonText! : string ;

  //fonction appelée au moment de la création de chaque instance du composant
  // on doit implémenter l'interface OnInit
  // permet d'initialiser les propriétés
  ngOnInit() {
    this.buttonText = "Oh Snap !" ;
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
