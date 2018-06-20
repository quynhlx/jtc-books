import { EditBookComponent } from './../edit-book/edit-book.component';
import { IBook } from '../../interfaces/IBook';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveBookComponent } from '../remove-book/remove-book.component';
import { BookService } from '../../shared';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: IBook;
  @Output() remove = new EventEmitter<any>();
  isBackdrop = false;
  constructor(private authService: AuthService,
    private bookService: BookService,
    private dialog: MatDialog) { }

  ngOnInit() {
    console.log('ngOnInit started');
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy book ${this.book.title} started`);
  }

  download(book: IBook) {
  }

  showBackdrop() {
    if (!this.isBackdrop) {
      this.isBackdrop = true;
    }
  }

  hideBackdrop() {
    if (this.isBackdrop) {
      this.isBackdrop = false;
    }
  }

  openEditBookDialog(editbook: IBook) {
    const dialogRef = this.dialog.open(EditBookComponent, {
      width: '400px',
      height: '400px',
      data: editbook
    });
  }

  openRemoveBookDialog(removeBook: IBook) {
    const dialogRef = this.dialog.open(RemoveBookComponent, {
      width: '400px',
      height: 'auto',
      data: removeBook
    });
  }

}
