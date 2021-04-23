import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isOpen:boolean = false;

  move(el:string){
    el = window.location.hash;
    
  }
  onOpen(){
    this.isOpen = !this.isOpen;
  }
}
