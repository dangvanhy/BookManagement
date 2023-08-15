import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private bookNameSource = new BehaviorSubject<string>('');
  private genreIdSource = new BehaviorSubject<number>(0);
  private authorIdSource = new BehaviorSubject<number>(0);

  bookName$ = this.bookNameSource.asObservable();
  genreId$ = this.genreIdSource.asObservable();
  authorId$ = this.authorIdSource.asObservable();

  updateBookNameValue(bookName: string) {
    this.bookNameSource.next(bookName);
  }

  updateGenreId(genreId: number) {
    this.genreIdSource.next(genreId);
  }

  updateAuthorId(authorId: number) {
    this.authorIdSource.next(authorId);
  }
}
