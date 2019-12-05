import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import Question from 'src/model/question';

const observable = new Observable(subscriber => {
  let i = 1
  setInterval(() => subscriber.next('Observable ' + i++), 1000)
 })

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  Score : number;
  nbQuestions : number;
  constructor(private http : HttpClient) { }

  /*buildNewQuiz(): Observable<Question[]> {
    let question = this.http.get<Question[]>('http://localhost:3000/questions');
    this.shuffle(question);
  }*/

  private shuffle(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
    }

  private randomProp(){

  }
}
