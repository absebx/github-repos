import { Component, OnInit } from '@angular/core';

import {RepositoriesService} from './repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})


export class RepositoriesComponent implements OnInit {

  repositories : any = [];

  repository : IRepository = {name:"", description:""};
  newRepository : IRepository={name:"", description:""};

  constructor(private repoService : RepositoriesService) { }

  ngOnInit() {
    //this.repository = {name: "Angular curso de abner", description: "Proyecto de prueba que hace el abner"};
    /*
    setTimeout(()=>{
      this.repositories = [
        {name: "Angular curso de abner", description: "Proyecto de prueba que hace el abner"},
        {name: "Clasificador de dinosaurios", description: "App web para clasificar dinosaurios"},
        {name: "Mesclador de datos", description: "mesclador de datos web"}
      ];
    },2000);*/

    this.repoService.getRepos().subscribe((data)=>{
      this.repositories = data.json();
      this.repository = this.repositories[0];
    });
  }

  setMainRepository(repository){
    this.repository=repository;
  }

  addNewRepo(){
    this.repositories.unshift(this.newRepository);
    this.newRepository = {name:"", description:""};
  }
}

interface IRepository{
  name: String,
  description: String
}
