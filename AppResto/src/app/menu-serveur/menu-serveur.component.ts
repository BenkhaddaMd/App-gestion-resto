import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../all-services.service';
import { Plat } from '../menugestion/menugestion.component';

@Component({
  selector: 'app-menu-serveur',
  templateUrl: './menu-serveur.component.html',
  styleUrls: ['./menu-serveur.component.scss']
})
export class MenuServeurComponent implements OnInit {

  constructor(private myServ:AllServicesService) { }

  public plats:Plat[] = [];

  buy(id){
    document.getElementsByClassName("bottom")[id].classList.toggle("clicked");
  }
  remove(id){
    document.getElementsByClassName("bottom")[id].classList.toggle("clicked");
  }

  ngOnInit(): void {

    this.myServ.getPlats().subscribe(
      (data:Plat[]) => this.plats = data,
      error=> console.error(error)
    );
  }

}
