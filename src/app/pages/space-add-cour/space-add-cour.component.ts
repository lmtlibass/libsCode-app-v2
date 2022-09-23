import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { CoursService } from 'src/app/services/cours.service';




@Component({
  selector: 'app-space-add-cour',
  templateUrl: './space-add-cour.component.html',
  styleUrls: ['./space-add-cour.component.css']
})
export class SpaceAddCourComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
};

id_user = localStorage.getItem('user_id');
public form = {
  titre : '',
  contenu : '',
  statut: 0,
  module_id: '',
  description: '',
  user_id: Number(this.id_user),
}
public modules : any;


  constructor(
    private coursService: CoursService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this. getModules();
  }

  //recuperer les modules
  getModules(){
    return this.coursService.getModules().subscribe(
      res => this.modules = res
    )
  }

  //enregistrer un cours 
  setCours(){
    return this.coursService.addCours(this.form).subscribe(
      (data)=>{
        console.log(data);
        this.toastr.info('enregistrer avec succés');
        
      },
      (error)=>{
        console.log(error);
        this.toastr.warning('quelque chose cloche', 'Oups!')
      }
      
    )
  }

}
