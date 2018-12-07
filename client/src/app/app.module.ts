import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { StatisticComponent} from './Statistic/statistic.component'
import { StatiticService } from './Statistic/statistic.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuizProgramComponent } from './quiz-program/quiz-program.component';
import { QuizService } from './quiz-program/quiz.service';
import { ResultComponent} from './result/result.component';

import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignUpService } from './sign-up/sign-up.service';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionService } from './question-create/question.service';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { FooterComponent } from './footer/footer.component';
import { PropositionComponent } from './proposition/proposition.component';
import { PropositionService } from './proposition/proposition.service';
import { DetailQuizComponent } from './detail-quiz/detail-quiz.component';
import { DetailQuizService } from './detail-quiz/detail-quiz.service';
import { RecapCreationComponent } from './recap-creation/recap-creation.component';



@NgModule({
  declarations: [RootComponent,LoginComponent,HomeComponent,StatisticComponent,SignUpComponent,


    QuizProgramComponent, NavbarComponent, ResultComponent, QuestionCreateComponent,ProfileComponent, ProfileTeacherComponent, FooterComponent, PropositionComponent,DetailQuizComponent, RecapCreationComponent


  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [StatiticService,QuizService,SignUpService, QuestionService, PropositionService,DetailQuizService],
  bootstrap: [RootComponent]
})
export class AppModule { }
