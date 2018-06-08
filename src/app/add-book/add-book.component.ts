import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: IBook = {
    cover: '',
    id: 0,
    instock: true,
    price: 0,
    publishDate: new Date(Date.now()),
    title: ''
  };
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addBook(book: IBook) {
    this.bookService.createBook(book).subscribe(data => {
      alert('Them sach thanh cong');
    });
  }
}
