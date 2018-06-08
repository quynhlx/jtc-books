import { BookService } from './../services/book.service';
import { IBook } from './../interfaces/IBook';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: IBook;
  @Output() select = new EventEmitter<any>();

  constructor(private authService: AuthService,
    private bookService: BookService) { }

  ngOnInit() {
    console.log('ngOnInit started');
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy book ${this.book.title} started`);
  }
  
  download(book: IBook) {
  }

}
