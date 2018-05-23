import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books = [{
    cover: 'assets/book-cover-1.png',
    title: 'Lap trinh C++ 2',
    publishDate: new Date(),
    price: 25000
  }, {
    cover: 'assets/book-cover-3.png',
    title: 'Angular',
    publishDate: new Date()
  }, {
    cover: 'assets/book-cover-5.png',
    title: 'Nodejs'
  }, {
    cover: 'assets/book-cover-4.png',
    title: 'MongoDB'
  }];

  constructor() { }

  ngOnInit() {
  }

  selectBook(book) {
    alert(book.title);
  }

}
