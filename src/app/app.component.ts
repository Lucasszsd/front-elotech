import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    EditarComponent,
    DeletarComponent,
    NavbarComponent,
    PesquisarComponent,
    CadastrarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front-elotech';
}
