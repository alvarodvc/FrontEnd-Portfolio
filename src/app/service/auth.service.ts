import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
=======
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
  authURL = environment.URL + 'auth/';
=======
  authURL = 'https://bckendalvaro.herokuapp.com/auth/';
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }

}
