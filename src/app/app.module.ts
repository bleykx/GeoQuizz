import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QcmComponent } from './qcm/qcm.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';
import { QuizService } from './quiz.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { Qcm } from './qcm.view/qcm.view.component';

@NgModule({
  declarations: [
    AppComponent,
    QcmComponent,
    ScoreComponent,
    TimerComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClient,
    BrowserAnimationsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
