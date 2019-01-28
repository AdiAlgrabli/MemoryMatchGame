import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from '../components/user-registration/user-registration.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';
import { AllFeedbacksComponent } from '../components/all-feedbacks/all-feedbacks.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { GameResultsComponent } from '../components/game-results/game-results.component';
import { MemoryGameComponent } from '../components/memory-game/memory-game.component';
import { StopwatchComponent } from '../components/stopwatch/stopwatch.component';
import { Test2Component } from '../components/test2/test2.component';
import { Page404Component } from '../components/page404/page404.component';
import { AboutComponent } from '../components/about/about.component';

const routes: Routes = [
    { path: "registration", component: UserRegistrationComponent },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "feedbacks", component: FeedbacksComponent },
    { path: "all-feedbacks", component: AllFeedbacksComponent },
    { path: "game-results", component: GameResultsComponent},
    { path: "contact-us", component: ContactUsComponent },
    { path: "game", component: MemoryGameComponent },
    { path: "stopwatch", component: StopwatchComponent },
    { path: "about", component: AboutComponent },
    { path: "test2", component: Test2Component },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {}
