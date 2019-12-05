import { Component, OnInit } from '@angular/core';
import Question from '../../model/question';
import { QuizService } from '../quiz.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.scss']
})
export class QcmComponent implements OnInit {
  
  questions: Question[];
  iQuestion: 0;
  currentQuestion: Question;
  answer: string;
  found: boolean;
  hasNext = true;

  constructor(private quizService: QuizService,private http: HttpClient) {
    
   }

  ngOnInit() {
    //this.questions = this.quizService.buildNewQuiz();
    console.log(this.questions);
  }

  private getQuestions(){
    
  }

  private newGame(){
    //this.quizService.buildNewQuiz();
  }

  private loadNextQuestion(){
    this.iQuestion++;
  }

  private timeSpent(){

  }

  private answerGiven(){

  }

  private showAnswer(){

  }
}
