import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { NOMEM } from 'dns';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscarHeroe(termino: string) {
    //console.log(termino);
    this.router.navigate(['/buscar', termino]);
    let persona = { nombre: 'pepe' };
  }
}
