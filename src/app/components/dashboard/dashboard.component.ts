import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoComponent } from 'src/app/components/dashboard/evento/evento.component';

import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  modalEvento: MDBModalRef;

  constructor(private router: Router, private modalService: MDBModalService) { }

  ngOnInit() {
  }

  openEvento() {
    this.modalEvento = this.modalService.show(EventoComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-full-height modal-bottom ',
      animated: true
  })
  }


}
