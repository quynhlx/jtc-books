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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log('ngOnInit started');
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy book ${this.book.title} started`);
  }
  selectBook(book: IBook) {
    if (this.authService.user.username === 'janeto') {
      this.select.emit(book);
      console.log(book.title);
    }
  }

}
