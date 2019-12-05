import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  score : number;

  constructor() { }

  ngOnInit() {
  }

  getScore(){
    return this.score;
  }

}
