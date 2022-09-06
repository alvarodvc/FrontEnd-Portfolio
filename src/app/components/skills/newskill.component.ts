import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  nombreS: string;
  porcentajeS: number;

  constructor(private skillsS: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skills = new Skills(this.nombreS, this.porcentajeS);
    this.skillsS.save(skills).subscribe(
      data => {
        alert("Skill añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("fallo");
        this.router.navigate(['']);
      }
    )
  }

}
