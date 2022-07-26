import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
   this.usuarioLogado = this.authService.getUsuarioAutenticado();
  }

  logout(): void {
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

}
