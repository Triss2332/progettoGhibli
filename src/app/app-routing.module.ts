import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListafilmComponent } from './listafilm/listafilm.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { Lista2Component } from './lista2/lista2.component'
import { ForumComponent } from './forum/forum.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import {LoginComponent} from './login/login.component'
import { YourGuardGuard } from './your-guard.guard';
import {RegisterComponent} from './register/register.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [

  
  {path: '', component: HomeComponent},
  {path: 'films', component: ListafilmComponent},
  {path: 'lista2', component: Lista2Component},
  {path: 'dettagli', component: DettagliComponent},
  {path: 'films/:id', component: DettagliComponent},
  {path: 'lista2/:id', component: DettagliComponent},
  {path: 'forum', component: ForumComponent},
  {path : 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component : AdminComponent, canActivate: [YourGuardGuard]},
  {path: '**', component: PagenotfoundComponent},
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
