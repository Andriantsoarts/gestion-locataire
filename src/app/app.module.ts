import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material/material.module';
import { ProprietaireComponent } from './component/dashboard/proprietaire/proprietaire.component';
import { MauvaisPayeurComponent } from './component/dashboard/mauvais-payeur/mauvais-payeur.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { AjoutProprietaireComponent } from './component/dashboard/proprietaire/ajout-proprietaire/ajout-proprietaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupprimerPropComponent } from './component/dashboard/proprietaire/supprimer-prop/supprimer-prop.component';
import { VuePropComponent } from './component/dashboard/proprietaire/vue-prop/vue-prop.component';
import { AjoutMpComponent } from './component/dashboard/mauvais-payeur/ajout-mp/ajout-mp.component';
import { SupprimerMpComponent } from './component/dashboard/mauvais-payeur/supprimer-mp/supprimer-mp.component';
import { VueMpComponent } from './component/dashboard/mauvais-payeur/vue-mp/vue-mp.component';
import { LoginComponent } from './component/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProprietaireComponent,
    MauvaisPayeurComponent,
    SidebarComponent,
    AjoutProprietaireComponent,
    SupprimerPropComponent,
    VuePropComponent,
    AjoutMpComponent,
    SupprimerMpComponent,
    VueMpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
