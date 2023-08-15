import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];

  constructor(private http: HttpClient) {
  }

  public GetBook(): Observable<Book[]> {
    return this.http.get<Book[]>('https://localhost:7192/Book/get-all-books');
  }

  public getBookByName(bookName: string) {
    const data = {
      bookName : bookName
    }
    const url = `https://localhost:7192/Book/get-book-by-name?bookName=${bookName}`;
    return this.http.post<Book[]>(url,null);
  }

  public getBookByGenre(genreId: number) {
    const data = {
      genreId : genreId
    }
    const url = `https://localhost:7192/Book/get-book-by-genre?id=${genreId}`;
    return this.http.post<Book[]>(url,null);
  }

  public getBookByAuthor(authorId: number) {
    const data = {
      authorId : authorId
    }
    const url = `https://localhost:7192/Book/get-book-by-author?id=${authorId}`;
    return this.http.post<Book[]>(url,null);
  }
}
