import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ListafilmComponent } from './listafilm/listafilm.component';
import { HttpClientModule } from '@angular/common/http';
import { DettagliComponent } from './dettagli/dettagli.component';
import { Lista2Component } from './lista2/lista2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListafilmComponent,
    DettagliComponent,
    Lista2Component,
    PagenotfoundComponent,
    ForumComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
