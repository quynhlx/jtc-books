import { IUser } from './../interfaces/IUser';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from '../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:  Observable<IUser>;
  totalBook: number;
  constructor(
    private bookService: BookService,
    private authService: AuthService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.user = this.authService.user;
    this.bookService.books.subscribe((books) => {
      this.totalBook = books.length;
    });
  }
}



