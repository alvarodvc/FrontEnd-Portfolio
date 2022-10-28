import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
=======
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
<<<<<<< HEAD
  URL = environment.URL + 'proyectos/';
=======
  URL = 'https://bckendalvaro.herokuapp.com/proyectos/';
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<Proyectos>(this.URL + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
