import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
  buttonPress:boolean = false;

  openUrl(url: string){
    if(this.buttonPress){
      this.buttonPress = false;
      return;
    }
    window.open(url,"_blank");
  }

  onClick(){
    this.buttonPress = true;
  }
}
