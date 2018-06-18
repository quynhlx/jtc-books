import { BookService } from '../ebook/services/book.service';
import { IUSer } from './../interfaces/IUser';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: IUSer;
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

  changeName(name: string) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.authService.login(result.username, result.password);
    });
  }

}




@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.dialog.html',
})
export class LoginDialogComponent {

  username: string;
  password: string;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login() {
    if (this.username && this.password) {
      this.dialogRef.close({ username: this.username, password: this.password });
    }
  }
}
