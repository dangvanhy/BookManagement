import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { Genre } from 'src/app/models/genre';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  content: string = "Book";
  books: Book[] = [];
  genres: Genre[] = [];
  authors: Author[] = [];

  dataSource: any;

  constructor(private bookService: BookService, private genreService: GenreService, private authorService: AuthorService) { }

  ngOnInit(): void {
    this.content = "Book";
    this.bookService.GetBook().subscribe(x => {
      this.books = x;
    });
  }

  public ChangeToBook(): void {
    this.content = "Book";
    this.bookService.GetBook().subscribe(x => {
      this.books = x;
    });
  }

  public getNameOfGenre(id: number): Observable<string> {
    return this.genreService.getGerneById(id).pipe(
      map((genre: Genre | undefined) => {
        if (genre) {
          return genre.name;
        } else {
          return "Unknown Genre";
        }
      })
    );
  }

  public getNameOfAuthor(id: number): Observable<string> {
    return this.authorService.getAuthorById(id).pipe(
      map((author: Author | undefined) => {
        if (author) {
          return author.name;
        } else {
          return "Unknown Author";
        }
      })
    );
  }
  

  public ChangeToAuthor(): void {
    this.content = "Author"
  }

  public ChangeToGenre(): void {
    this.content = "Genre";
  }
}
