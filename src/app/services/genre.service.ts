import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../models/genre';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  genres: Genre[] = []

  constructor(private http: HttpClient) {
  }

  public GetGenre(): Observable<Genre[]> {
    return this.http.get<Genre[]>('https://localhost:7192/Genre/get-all-genres');
  }

  public getGerneById(genreId: number): Observable<Genre | undefined> {
    return this.GetGenre().pipe(
      map(genres => genres.find(genre => genre.id === genreId))
    );
  }
}
