import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(
    private http: HttpClient
  ) { }

    //recuperer les modules
    getModules(){
      return this.http.get(environment.api_url + 'modules');
    }
     
    //recuperer  les derniers cours qui ont été validés
    getRecentsCours(){
      return this.http.get(environment.api_url + 'coursRe');
    }

    //récupérer les cours validés
    getCours(){
      return this.http.get(environment.api_url + 'cours');
    }

    //filtrer les cours validés par module
    getCoursByModule(moduleId: number){
      return this.http.get(environment.api_url + 'coursModule/' + moduleId);
    }

    //recuperer les details d'un cours
    showCours(id : number){
      return this.http.get(environment.api_url + 'cour/' + id)
    }
    //Enregistrer un cours 
    addCours(cours :any){
      return this.http.post(environment.api_url + 'cours', cours);
    }

    //récupérer les cours créé par un l'utilisateur en session
    getCourqByUser(id : number){
      return this.http.get(environment.api_url + 'courUser/' + id);
    }


}
