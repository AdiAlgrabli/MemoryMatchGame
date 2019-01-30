import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { UserRegistrationComponent } from '../components/user-registration/user-registration.component';
import { FormsModule } from "@angular/forms";
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material'; 
import { MatSelectModule } from '@angular/material/select';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../components/login/login.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FeedbacksComponent } from '../components/feedbacks/feedbacks.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { PhoneComponent } from '../components/phone/phone.component';
import { GameResultsComponent } from '../components/game-results/game-results.component';
import { AllFeedbacksComponent } from '../components/all-feedbacks/all-feedbacks.component';
import { BackgroundImageComponent } from '../components/background-image/background-image.component';
import { CardComponent } from '../components/card/card.component';
import { MemoryGameComponent } from '../components/memory-game/memory-game.component';
import { StopwatchComponent } from '../components/stopwatch/stopwatch.component';
import { StopwatchPipe } from '../pipes/stopwatch.pipe';
import { ModalComponent } from '../components/modal/modal.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LayoutModule } from '@angular/cdk/layout';
import { Page404Component } from '../components/page404/page404.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutComponent } from '../components/about/about.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        UserRegistrationComponent,
        LoginComponent,
        MenuComponent,
        FeedbacksComponent,
        HomeComponent,
        ContactUsComponent,
        PhoneComponent,
        GameResultsComponent,
        AllFeedbacksComponent,
        BackgroundImageComponent,
        CardComponent,
        MemoryGameComponent,
        StopwatchComponent,
        StopwatchPipe,
        ModalComponent,
        Page404Component,
        FooterComponent,
        AboutComponent,
    ],
    entryComponents: [ModalComponent],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        BsDatepickerModule.forRoot(),
        FormsModule,
        RoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        MatInputModule,        
        MatMenuModule,
        MatButtonModule,    
        MatIconModule,    
        MatCardModule,
        MatCheckboxModule,        
        MatSelectModule,
        NgxPasswordToggleModule,
        HttpClientModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
