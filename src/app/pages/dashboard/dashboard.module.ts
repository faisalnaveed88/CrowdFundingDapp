import { PlegeAmountComponent } from './../ProjectDetailIs/pledgeAmount/pledgeAmount.component';


import { ProjectRewardComponent } from './../ProjectDetailIs/projectRewards/projectReward.component';

import { CookieService } from 'ngx-cookie-service';
import { Web3DashComponent } from './Web3Dash.compononent';
import { ProjectDetailsInformationComponent } from './../ProjectDetailIs/ProjectDetails.componet';
import { ProjectDetailsModule } from './../ProjectDetailIs/ProjectDetails.module';
import { NgModule , AfterViewInit } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from './team/team.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import {  SingleProject} from "./Project/singleProject";
import {  NgProgressModule} from "ngx-progressbar";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    NgProgressModule,
    MDBBootstrapModule.forRoot(),

  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    SingleProject,
    ProjectDetailsInformationComponent,
    Web3DashComponent,
    ProjectRewardComponent,
    PlegeAmountComponent

  ],
  providers: [ CookieService ],
})
export class DashboardModule{


  }
