import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { DatepickerModule } from 'angular2-material-datepicker'

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GridComponent } from './components/grid/grid.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { GetdoctorsService } from './services/getdoctors.service';
import { CreatesheduleService } from './services/createshedule.service'
import { GetpatientsService } from './services/getpatients.service'
import { FilterPipe } from './filter.pipe';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'newdoctor', component: AddDoctorComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    GridComponent,
    AddDoctorComponent,
    FilterPipe,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    DatepickerModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, GetdoctorsService, CreatesheduleService, GetpatientsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
