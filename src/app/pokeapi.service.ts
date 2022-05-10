import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Pokemon } from './pokeapi.model';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  }

}
