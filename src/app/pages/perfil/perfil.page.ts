import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public cidadaos: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCidadaos();
  }

  public getCidadaos(): void {
    this.http.get('http://localhost:5000/Cidadaos').subscribe(
      (response) => (this.cidadaos = response),
      (error) => console.log(error)
    );
  }
}
