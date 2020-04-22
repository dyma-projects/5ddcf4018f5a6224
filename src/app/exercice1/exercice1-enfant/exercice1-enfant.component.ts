import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  
  public valeurCompteur : number = 0;

  @Output("modif") majCompteur = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementer() {
    this.valeurCompteur++;
    this.majCompteur.emit({
      value: this.valeurCompteur
    });
  }
  
  decrementer() {
    this.valeurCompteur--;
    this.majCompteur.emit({
      value: this.valeurCompteur
    });
  }

}
