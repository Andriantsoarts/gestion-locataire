import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MauvaisPayeurComponent } from './component/dashboard/mauvais-payeur/mauvais-payeur.component';
import { ProprietaireComponent } from './component/dashboard/proprietaire/proprietaire.component';
import { VuePropComponent } from './component/dashboard/proprietaire/vue-prop/vue-prop.component';
import { VueMpComponent } from './component/dashboard/mauvais-payeur/vue-mp/vue-mp.component';
import { LoginComponent } from './component/auth/login/login.component';
import { AuthguardGuard } from './shared/guard/authguard.guard';

const routes: Routes = [
  {path : 'dashboard', children :[
    {path :'', redirectTo : 'mauvais-payeur', pathMatch: 'full'},
    {path : 'mauvais-payeur', component: MauvaisPayeurComponent},
    {path : 'proprietaire', component: ProprietaireComponent},
    {path : 'proprietaire/:id', component: VuePropComponent},
    {path : 'mauvais-payeur/:id', component: VueMpComponent}
  ],canActivate : [AuthguardGuard] },
  {path :'login', component : LoginComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
