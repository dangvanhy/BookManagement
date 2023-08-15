import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Genre } from 'src/app/models/genre';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { GenreService } from 'src/app/services/genre.service';
import { SharedDataService } from 'src/app/services/share.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  authors: Author[] = [];
  genres: Genre[] = [];

  constructor(private genreService: GenreService, private authorService: AuthorService, private bookService: BookService, private sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    this.GetAllGenre();
    this.GetAllAuthor();
  }

  private GetAllGenre(): void {
    this.genreService.GetGenre().subscribe(x => {
      this.genres = x;
    })
  }

  private GetAllAuthor(): void {
    this.authorService.GetAuthor().subscribe(x => {
      this.authors = x;
    })
  }

  public onGenreClick(genre: Genre): void {
    this.sharedDataService.updateGenreId(genre.id);
  }

  public onAuthorClick(author: Author): void {
    this.sharedDataService.updateGenreId(author.id);
  }

  public GetAllBook(): void {
    this.sharedDataService.updateBookNameValue("");
  }
}
