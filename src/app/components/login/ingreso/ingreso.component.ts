import { Component } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent {
  public email: string = '';
  public password: string = '';

  constructor(public modalRef: MDBModalRef,private router: Router, private authService: LoginService) { }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));

      this.modalRef.hide();
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }
  onLoginRedirect(): void {
    this.router.navigate(['menu']);
  }
}
