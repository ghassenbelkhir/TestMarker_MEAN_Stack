import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
 
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StatisticComponent } from './Statistic/statistic.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuizProgramComponent } from './quiz-program/quiz-program.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent} from './profile/profile.component';

import { QuestionCreateComponent } from './question-create/question-create.component';

import { DetailQuizComponent } from './detail-quiz/detail-quiz.component';

import { ResultComponent} from './result/result.component';
import { RecapCreationComponent } from './recap-creation/recap-creation.component';



export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    {path: 'statistic', component: StatisticComponent},
    {path:'sign-up',component : SignUpComponent },
    {path:'quiz',component : QuizProgramComponent },
    {path:'profile', component : ProfileComponent },
    {path:'profile-teacher', component : ProfileTeacherComponent},
    {path:'createQuestion',component : QuestionCreateComponent },
    {path:'navbar', component : NavbarComponent},

    {path:'QuizDetails/:id', component : DetailQuizComponent },
    {path:'result', component : ResultComponent},
    
    { path: 'recapitulation', component: RecapCreationComponent}
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
