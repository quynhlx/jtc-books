import { MatDialog } from '@angular/material/dialog';
import { IBook } from '../../interfaces/IBook';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { BookService } from '../../shared';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit() {
    const observer = {
      next: function (data) {
        this.books = data;
        this.originBooks = data;
      }.bind(this),
      error: function (err) {
        console.log(err);
      }.bind(this)
    };
    this.bookService.books.subscribe((data) => {
      this.books = data;
      this.originBooks = data;
    }, (err) => {
      console.log(err);
    });

    this.bookService.getBooks();
  }

  ngOnChanges() {
  }

  onSearch(keyword: string) {
    this.books = this.originBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '400px',
      height: '400px'
    });
  }
}
