import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home da Página',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    title: 'Sobre da Página',
    component: SobreComponent,
  },
  {
    path: 'servicos/:id',
    title: 'Serviços da Página',
    component: ServicosComponent,
  },

  //filhas
  {
    path: 'dashboard',
    children: [
      {
        path: 'home',
        title: 'Home da Página',
        component: HomeComponent,
      },
      // mt bom! 
      {
        path: 'sobre',
        title: 'Sobre da Página',
        loadComponent: () =>
          import('./pages/sobre/sobre.component').then((p) => p.SobreComponent),
      },
      {
        path: 'servicos/:id',
        title: 'Serviços da Página',
        component: ServicosComponent,
      },
    ],
  },

  // coringa
  {
    path: '**',
    component: NotFoundComponent,
  },
];
