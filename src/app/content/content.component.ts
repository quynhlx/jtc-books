import { AddBookDialogComponent } from './../add-book-dialog/add-book-dialog.component';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/IBook';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(private bookService: BookService, public dialog: MatDialog) { }

  books: IBook[] = [];
  isViewList: Boolean = false;
  changed: Boolean = false;
  filterBook: String = '';

  ngOnInit() {
    this.bookService.books.subscribe(books => {
      this.books = books;
    });
    this.bookService.getBooks();
  }

  changeListView(view: boolean) {
    this.isViewList = view;
    this.changed = view;
  }

  search(keyword: string) {
    this.bookService.searchBooks(keyword);
  }

  openAddBookDialog() {
    this.dialog.open(AddBookDialogComponent, {
      width: '500px'
    });
  }
}
