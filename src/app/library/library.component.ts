import { IBook } from './../interfaces/IBook';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnChanges {

  books: IBook[] =  [{
    cover: 'assets/book-cover-1.png',
    title: 'Lap trinh C++ 2',
    price: 10000,
    instock: true
  }, {
    cover: 'assets/book-cover-3.png',
    title: 'Angular',
    price: 20000
  }, {
    cover: 'assets/book-cover-5.png',
    title: 'Nodejs',
    price: 30000
  }, {
    cover: 'assets/book-cover-4.png',
    title: 'MongoDB',
    price: 50000
  }];
  originBooks: IBook[] = [];

  selectedBook: IBook;
  @Input() keyword = '';

  constructor() { }

  ngOnInit() {
    // Get book from server
    // this.books = this.originBooks;
  }

  ngOnChanges() {
    // this.searchBook(this.keyword);
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
