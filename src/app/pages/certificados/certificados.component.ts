import { Component } from '@angular/core';

import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado.component";
import { Router, RouterLink } from '@angular/router';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
