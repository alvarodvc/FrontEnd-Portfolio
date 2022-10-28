import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
<<<<<<< HEAD
import { TokenService } from 'src/app/service/token.service';
=======
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
<<<<<<< HEAD
  persona: persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.details(1).subscribe(data =>
      {this.persona = data}
      )
=======
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
>>>>>>> 6d48d9cd62ad83a22e57cd7c8c33cdd779c26299
  }

}
