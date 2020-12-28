import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import {LandingComponent} from './landing/landing.component';
import { FormsSliderComponent } from './forms-slider/forms-slider.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { AirComponent } from './air/air.component';
import { RecyclingComponent } from './recycling/recycling.component';
import { CyclingComponent } from './cycling/cycling.component';
import { GoElectricComponent } from './go-electric/go-electric.component';
import { ResultComponent } from './result/result.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import {EnergyComponent} from './energy/energy.component';
import {HabitsComponent} from './habits/habits.component';
import {DietComponent} from './diet/diet.component';
import {TransportComponent} from './transport/transport.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        LandingComponent,
        FormsSliderComponent,
        MethodologyComponent,
        AirComponent,
        RecyclingComponent,
        CyclingComponent,
        GoElectricComponent,
        ResultComponent,
        MessageBoardComponent,
        ProfileComponent,
        SignupComponent,
        EnergyComponent,
        HabitsComponent,
        DietComponent,
        TransportComponent,
        ErrorComponent

    ],

    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
