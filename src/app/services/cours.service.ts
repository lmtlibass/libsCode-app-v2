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
    //recuperer les details d'un cours pas encors validé
    showCoursNonvalide(id : number){
      return this.http.get(environment.api_url + 'courAdmin/' + id)
    }
    //Enregistrer un cours 
    addCours(cours :any){
      return this.http.post(environment.api_url + 'cours', cours);
    }

    //récupérer les cours créé par un l'utilisateur en session
    getCourqByUser(id : number){
      return this.http.get(environment.api_url + 'courUser/' + id);
    }

    //récuperer les cours pas encore validés
    getCoursNonValid(){
      return this.http.get(environment.api_url + 'coursAdmin')
    }

    //changer statut Cours
    changeStatus(id: number, cours: any){
      return this.http.put(environment.api_url + 'cours/' + id, cours)
    }

    //désaprouvé ou supprimé un cours
    deleteCours(id: number){
      return this.http.delete(environment.api_url + 'cours/'+ id);
    }
   

}
