import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gestion_locataire';
  userLoggedIn: boolean = false;

  constructor(private authApi: AuthService) {}

  ngOnInit() {
    this.userLoggedIn = this.authApi.isUserLoggedIn();
    console.log('userLoggedIn:', this.userLoggedIn);
  }
    
  }
