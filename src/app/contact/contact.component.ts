import { Component, OnInit } from '@angular/core';

import {Contacto} from '../contacto'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacto: Contacto={
    nombre:'',
    email:'',
    telefono:'',
    fecha:'',
    ciudad:'',
    activo:false
 }
  constructor() { }
  ngOnInit() {
  }
  enviar(){
    let detalles = [];
    var rec = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var ret = /^([\(]?)+([\+]?)+([0-9]{2})+([\)]?)+([-]?)+([0-9]{3})+([-]?)+([0-9]{4})$/;
    let activo = false;

    if (this.contacto.nombre.length == 0)
    detalles.push("Es necesario ingresar su nombre");
  if(!rec.test(this.contacto.email.toLowerCase()))
    detalles.push("El formato de correo no es correcto, Ejemplo: someone@company.com");
  if (!ret.test(this.contacto.telefono))
    detalles.push("El número de teléfono no es correcto");
  if (this.contacto.fecha.length == 0)
    detalles.push("Es necesario ingresar una fecha");
  if (this.contacto.ciudad.length == 0)
    detalles.push("Es necesario ingresar su ubicación");
    if (detalles.length!=0) {
  //this.popup.show();
    alert( detalles);

    }else{
      this.contacto.activo = true;
    }

  }
}
