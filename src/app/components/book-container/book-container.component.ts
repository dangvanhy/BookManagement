import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { SharedDataService } from 'src/app/services/share.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {
  books: Book[] = []

  constructor(private bookService: BookService, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.bookService.GetBook().subscribe(x => {
      this.books = x;
    });

    this.sharedDataService.bookName$.subscribe(bookName => {
      if (bookName != '') {
        this.bookService.getBookByName(bookName).subscribe(x => {
          this.books = x;
        });
      }
      else {
        this.bookService.GetBook().subscribe(x => {
          this.books = x;
        });
      }
    });

    this.sharedDataService.genreId$.subscribe(genreId => {
      if (genreId != 0) {
        this.bookService.getBookByGenre(genreId).subscribe(x => {
          this.books = x;
        })
      }
    });

    this.sharedDataService.authorId$.subscribe(authorId => {
      if (authorId != 0) {
        this.bookService.getBookByAuthor(authorId).subscribe(x => {
          this.books = x;
        })
      }
    });
  }

  public handleChange(event: any) {
    const bookName = event.target.value;
    this.sharedDataService.updateBookNameValue(bookName);
  }
}
