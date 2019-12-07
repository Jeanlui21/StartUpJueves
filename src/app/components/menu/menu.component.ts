import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( private router: Router, private location: Location, private authService: LoginService, private afsAuth: AngularFireAuth) { }
  public isLogged: boolean = false;

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
        if ( this.router.url === 'login') {
          this.router.navigate(['menu']);
        } else {

        }
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  goBack() {
    this.location.back();
  }

  onLogout() {
    this.afsAuth.auth.signOut();
    this.router.navigate(['login']);
  }

}
