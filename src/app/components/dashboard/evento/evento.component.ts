import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

declare const jsCustom: any;


@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  constructor(public modalEvento: MDBModalRef) { }

  ngOnInit() {
  }

  createEvento(){
    this.modalEvento.hide();
  }

  onClick(input) {
    jsCustom(input);
  }
  
}
