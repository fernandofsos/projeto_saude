
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../login/modal/usuario';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private readonly API = environment.apiUrlBase + "usuarios" ;

  apiUrl: string = environment.apiUrlBase + "/usuarios" ;
  tokenUrl: string = "http://localhost:8090/backendpedido/oauth/token";
  clientId: string = environment.clientId;
  clientSecret: String = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private httpClient: HttpClient){ }

   obterToken() : any {
      const tokenString = localStorage.getItem('access_token');
      if(tokenString){
        const token = JSON.parse(tokenString).access_token;
        return token;
      }
      return null;
   }

  isAuthenticated() : boolean {
     const token = this.obterToken();
     if(token){
       const expired = this.jwtHelper.isTokenExpired(token);
       return !expired;
     }
     return false;
  }

  salvar(usuario: Usuario): Observable<any>{
    console.log("service salvar");
    console.log(usuario);
    console.log(this.apiUrl);
    return this.httpClient.post<any>(this.apiUrl, usuario);
  }

  tentarLogar(userName: string, password: string):Observable<any>{
      const params = new HttpParams()
                    .set('username', userName)
                    .set('password', password)
                    .set('grant_type','password');

      const headers = {
        'Authorization': 'Basic ' + btoa(this.clientId+':'+this.clientSecret),
        'Content-Type' : 'application/x-www-form-urlencoded'
      }

      return this.httpClient.post(this.tokenUrl, params.toString(), { headers : headers });
  }

  encerrarSessao(): void {
    localStorage.removeItem('access_token');
  }

  getUsuarioAutenticado(): string {

    const token = this.obterToken();
    console.log(token);
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).user_name;
      return usuario;
    }
    return null;
  }

  getIdUsuario(): number {
    const token = this.obterToken();
    if(token){
      const idUsuario = this.jwtHelper.decodeToken(token).user_name;
      return idUsuario;
    }
    return null;
  }


}


