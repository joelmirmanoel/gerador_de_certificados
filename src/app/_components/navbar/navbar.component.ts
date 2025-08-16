import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgClass } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
rlaListaCertificado: any;
  ngOnInit(): void {
    this.mensagem();
  }

  mensagem(){
    console.log('meu componente navbar inicializou(dentro)');

  }
}
