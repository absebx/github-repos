import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})


export class RepositoriesComponent implements OnInit {

  repositories : any = [];

  repository : IRepository;

  constructor() { }

  ngOnInit() {

    this.repository = {name: "Angular curso de abner", description: "Proyecto de prueba que hace el abner"};
    setTimeout(()=>{
      this.repositories = [
        {name: "Angular curso de abner", description: "Proyecto de prueba que hace el abner"},
        {name: "Clasificador de dinosaurios", description: "App web para clasificar dinosaurios"},
        {name: "Mesclador de datos", description: "mesclador de datos web"}
      ];
    },2000);
  }

  setMainRepository(repository){
    this.repository=repository;
  }
}

interface IRepository{
  name: String,
  description: String
}
