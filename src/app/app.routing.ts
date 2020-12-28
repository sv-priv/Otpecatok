import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import {MethodologyComponent} from './components/methodology/methodology.component';
import {MessageBoardComponent} from './components/message-board/message-board.component';
import {AirComponent} from './components/air/air.component';
import {RecyclingComponent} from './components/recycling/recycling.component';
import {CyclingComponent} from './components/cycling/cycling.component';
import {GoElectricComponent} from './components/go-electric/go-electric.component';
import {FormsSliderComponent} from './components/forms-slider/forms-slider.component';
import {WhereToRecycleComponent} from './components/where-to-recycle/where-to-recycle.component';




const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'methodology',      component: MethodologyComponent },
    { path: 'message-board',      component: MessageBoardComponent },
    { path: 'air',      component: AirComponent },
    { path: 'recycling',      component: RecyclingComponent },
    { path: 'cycling',      component: CyclingComponent },
    {path: 'where-to-recycle',   component: WhereToRecycleComponent},
    { path: 'go-electric',      component: GoElectricComponent },
    { path: 'forms-slider',      component: FormsSliderComponent },
    { path: 'home:kviz',             component: ComponentsComponent }




];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
