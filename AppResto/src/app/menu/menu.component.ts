import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AllServicesService } from '../all-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private myServ:AllServicesService) { }
  
  public plats:plat[] = [];
  displayedColumns: string[] = ['position', 'nom', 'description', 'categorie', 'prix'];
  dataSource = new MatTableDataSource<plat>(this.plats);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.myServ.getPlats().subscribe(
      (data:plat[]) => {this.plats = data;  this.dataSource = new MatTableDataSource<plat>(this.plats);});

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface  plat{
  id:number;
  name: string;
  description: string;
  categorie: string;
  prix: string;
};
