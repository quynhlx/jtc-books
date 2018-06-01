import { BookService } from './../services/book.service';
import { IBook } from './../interfaces/IBook';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss']
})
export class AddBookDialogComponent implements OnInit {

  book: IBook = {
    cover: '',
    link: '',
    title: ''
  };
  constructor(private bookSerivce: BookService,
    public dialogRef: MatDialogRef<AddBookDialogComponent>) { }

  ngOnInit() {
  }

  addBook(book: IBook) {
    this.bookSerivce.addBook(book);
    this.dialogRef.close();
  }

}
