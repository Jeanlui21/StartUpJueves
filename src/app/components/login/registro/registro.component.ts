import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
