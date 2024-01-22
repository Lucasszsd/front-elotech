import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'pessoas',
    loadComponent: () =>
      import('./pesquisar/pesquisar.component').then(
        (c) => c.PesquisarComponent
      ),
  },
];
