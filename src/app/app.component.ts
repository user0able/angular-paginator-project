import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeapiService } from './pokeapi.service';
import { ApiResponse, Pokemon } from './pokeapi.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-paginator-project';

  constructor(private pokeService: PokeapiService) {}

  dataSource?: any;
  columnas: string[] = ['name', 'url'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    console.log(MatPaginator);
    console.log(this.paginator)
    this.pokeService.getPokemons().subscribe(
      (r) => {
        this.dataSource = new MatTableDataSource<Pokemon>(r.results);
        this.dataSource.paginator = this.paginator;
      }
    )
  }
}
