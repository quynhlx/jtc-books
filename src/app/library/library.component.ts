import { BookService } from './../services/book.service';
import { IBook } from './../interfaces/IBook';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnChanges {

  @Input() books: IBook[];
  originBooks: IBook[] = [];

  selectedBook: IBook;
  @Input() keyword = '';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books as IBook[];
    });
  }

  ngOnChanges() {
  }

  selectBook(book: IBook) {
    this.selectedBook = book;
  }

  removeBook() {
    this.books.pop();
  }

  searchBook(keyword: string) {
    this.books = this.originBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
  }
}
