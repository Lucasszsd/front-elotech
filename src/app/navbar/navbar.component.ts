import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { DeletarComponent } from '../deletar/deletar.component';
import { EditarComponent } from '../editar/editar.component';
import { PesquisarComponent } from '../pesquisar/pesquisar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CadastrarComponent,
    CommonModule,
    DeletarComponent,
    EditarComponent,
    PesquisarComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../cadastrar/cadastrar.component.css'],
})
export class NavbarComponent {
  mostrarFormularioCadastro: boolean = false;
  mostrarFormularioPesquisa: boolean = false;
  mostrarFormularioDeleta: boolean = false;
  mostrarFormularioEdita: boolean = false;

  toggleFormularioCadastro() {
    this.mostrarFormularioCadastro = !this.mostrarFormularioCadastro;
  }
  toggleFormularioPesquisa() {
    this.mostrarFormularioPesquisa = !this.mostrarFormularioPesquisa;
  }
  toggleFormularioDeleta() {
    this.mostrarFormularioDeleta = !this.mostrarFormularioDeleta;
  }
  toggleFormularioEdita() {
    this.mostrarFormularioEdita = !this.mostrarFormularioEdita;
  }
}
