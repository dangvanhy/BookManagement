import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors: Author[] = [];

  constructor(private http: HttpClient) {
    
  }

  public GetAuthor(): Observable<Author[]> {
    return this.http.get<Author[]>('https://localhost:7192/Author/get-all-authors');
  }

  public getAuthorById(authorId: number): Observable<Author | undefined> {
    return this.GetAuthor().pipe(
      map(authors => authors.find(author => author.id === authorId))
    );
  }
}
