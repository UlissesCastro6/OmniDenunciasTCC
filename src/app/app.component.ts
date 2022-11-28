import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pagina Inicial', url: 'home', icon: 'home'},
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Vereador', url: 'vereador', icon: 'person' },
    { title: 'Denúncias', url: 'denuncia', icon: 'document' },
    { title: 'Feed de Noticias', url: 'feed', icon: 'newspaper' },
    { title: 'index', url: 'index', icon: 'construct' }
  ];

  constructor() {}
}
