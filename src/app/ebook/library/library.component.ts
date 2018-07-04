import { MatDialog } from '@angular/material/dialog';
import { IBook } from '../../interfaces/IBook';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { BookService } from '../../shared';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  page = 1;
  length = 0;
  pageSize = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private router: Router,
    private bookService: BookService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.bookService.books.subscribe((data) => {
      this.books = data;
    }, (err) => {
      console.log(err);
    });

    this.bookService.getBooks().subscribe(books => {
      this.length = books.length;
    });
  }

  ngOnChanges() {
  }

  pageEvent(page) {
    this.page = page.pageIndex + 1;
    this.bookService.getBooks(this.pageSize, this.page).subscribe(books => {
      this.length = books.length;
    });
  }
  onSearch(keyword: string) {
    this.bookService.searchBooks(keyword).subscribe(books => {
      this.books = books;
    });
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '400px',
      height: '400px'
    });
  }
}
