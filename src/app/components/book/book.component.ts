import { Component, Input, OnInit } from "@angular/core";
import { Author } from "src/app/models/author";
import { Book } from "src/app/models/book";
import { Genre } from "src/app/models/genre";
import { AuthorService } from "src/app/services/author.service";
import { GenreService } from "src/app/services/genre.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent implements OnInit {
  @Input() book: Book = new Book();
  path: string = "";
  author: Author = new Author();
  genre: Genre = new Genre();

  constructor(private authorService: AuthorService, private genreService: GenreService) { }

  ngOnInit(): void {
    this.path = this.book.imagePath;

    if (this.book.authorId != null) {
      this.authorService
        .getAuthorById(this.book.authorId)
        .subscribe((author) => {
          if (author) {
            this.author = author;
          }
        });
    }

    if (this.book.genreId != null) {
      this.genreService
        .getGerneById(this.book.authorId)
        .subscribe((genre) => {
          if (genre) {
            this.genre = genre;
          }
        });
    }
  }
}
