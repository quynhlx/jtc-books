import { IBook } from './../interfaces/IBook';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: IBook;
  @Output() select = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit started');
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy book ${this.book.title} started`);
  }
  selectBook(book) {
    console.log(book.title);
    this.select.emit(book);
  }

}
