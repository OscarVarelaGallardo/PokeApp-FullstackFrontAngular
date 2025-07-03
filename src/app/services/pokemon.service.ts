import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private apiUrl = 'http://localhost:8080/api/pokemon';

    constructor(private http: HttpClient) { }

    getPokemon(name: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${name}`);
    }
}