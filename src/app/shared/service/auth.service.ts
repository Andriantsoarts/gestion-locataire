import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = this.auth.authState;

  constructor(
    private auth : AngularFireAuth,
    private router : Router
    ) { }
     
  login(username : string, password :string){
      this.auth
      .signInWithEmailAndPassword(username, password)
      .then(result => {
        this.auth.authState.subscribe(async user => {
          if(user){
            localStorage.setItem('user', JSON.stringify(user));
            await this.router.navigate(['/dashboard']);
            location.reload();
          }
        })
      })
      .catch( error =>{
        console.log(error);
      })
   }

   async logout(){
    localStorage.setItem('user', 'null');
    await this.router.navigate(['']);
    location.reload();  
   }

   isUserLoggedIn(){
    const user = localStorage.getItem('user');
    return user !== 'null' ? true : false;
  }
   
}
