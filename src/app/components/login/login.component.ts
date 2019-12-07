import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { IngresoComponent } from 'src/app/components/login/ingreso/ingreso.component';
import { RegistroComponent } from 'src/app/components/login/registro/registro.component';

import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  modalRef: MDBModalRef;

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: LoginService, private modalService: MDBModalService) { }
  openLogin() {
    this.modalRef = this.modalService.show(IngresoComponent)
  }

  openRegistro() {
    this.modalRef = this.modalService.show(RegistroComponent)
  }
}
