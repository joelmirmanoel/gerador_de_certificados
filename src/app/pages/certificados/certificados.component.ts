import { Component } from '@angular/core';

import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
