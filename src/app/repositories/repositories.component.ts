import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories : any = [];

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.repositories = [
        {name: "Angular curso de abner", description: "Proyecto de prueba que hace el abner"},
        {name: "Clasificador de dinosaurios", description: "App web para clasificar dinosaurios"},
        {name: "Mesclador de datos", description: "mesclador de datos web"}
      ];
    },2000);

    setTimeout(()=>{
      this.repositories = [];
    },5000);
  }

}
