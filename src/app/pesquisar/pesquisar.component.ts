import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Pessoa } from '../models/pessoa';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pesquisar',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [ServiceService],
  templateUrl: './pesquisar.component.html',
  styleUrl: './pesquisar.component.css',
})
export class PesquisarComponent {
  public pessoas$ = new Observable<Pessoa[]>();

  constructor(private pessoaService: ServiceService) {
    this.pesquisarPessoas();
  }

  pesquisarPessoas() {
    this.pessoas$ = this.pessoaService.getPessoas();
  }
}
