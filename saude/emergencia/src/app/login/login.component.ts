import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './modal/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: string[];


  constructor(private router: Router,
              private authService: AuthService)
   {

   }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.errors = [];
  }

  preparaCadastrar(event): void {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(): void {
    this.cadastrando = false;
    this.mensagemSucesso = null;
  }

  onSubmit(): void {
    this.authService
        .tentarLogar(this.username, this.password)
        .subscribe(response => {
            console.log('01 - onSubmit()');
            console.log(JSON.stringify(response));
            this.guardaTonkenLocalStorage(JSON.stringify(response));
            this.guardaTonkenSessionStorage(JSON.stringify(response));
            this.router.navigate(['/home']);
        }, errorResponse => {
            console.log(errorResponse['status']);
            if(errorResponse['status'] == 0){
              this.errors= ['Sistema off-line']
            }else{
              this.errors= ['Usuario e/o senha incorreto(s)']
            }

        })

          console.log(`user ${this.username}, Pass: ${this.password} `);
  }

  //GUARDA NO LOCAL STORAGE
  guardaTonkenLocalStorage(tokenstring: string): void {
      localStorage.setItem('access_token', tokenstring);
  }

  //GUARDA NA SESSION STORAGE
  guardaTonkenSessionStorage(tokenstring: string): void {
    sessionStorage.setItem('access_token', tokenstring);
    //localStorage.setItem('access_token', tokenstring);
}

  cadastrarUsuario(): void {
      console.log("cadastrarUsuario");
      const usuario: Usuario = new Usuario();

      usuario.senha = this.password;
      usuario.usuario = this.username;

      this.authService.salvar(usuario).subscribe(resp => {
        console.log("Passou deu certo ");
        this.mensagemSucesso = "Cadastro Realizado com sucesso! Relize o login.";
        this.username = '';
        this.password = '';
        this.errors = [];
      }, errorRespose => {
        console.log("Passou aqui dentro do erro");
        console.log(errorRespose)
        this.cadastrando = false;
        this.mensagemSucesso = null;
        this.errors = errorRespose.error.errors;
      })
  }

}
