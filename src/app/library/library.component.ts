import { MatDialog } from '@angular/material/dialog';
import { BookService } from './../services/book.service';
import { IBook } from './../interfaces/IBook';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AddBookComponent } from 'src/app/add-book/add-book.component';
import { EditBookComponent } from 'src/app/edit-book/edit-book.component';

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
      width: '400px',
      height: '400px',
      data: this.books[0]
    });

    dialogRef.afterClosed().subscribe(book => {
      this.books.push(book);
    });

  }
}
