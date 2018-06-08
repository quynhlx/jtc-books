import { MatDialog } from '@angular/material/dialog';
import { BookService } from './../services/book.service';
import { IBook } from './../interfaces/IBook';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';

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

  constructor(private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books as IBook[];
      this.originBooks = books as IBook[];
    });
  }

  ngOnChanges() {
  }

  onSearch(keyword: string) {
    this.books = this.originBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '450px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(book => {
      console.log('The dialog was closed');
      this.books.push(book);
    });
  }
}
