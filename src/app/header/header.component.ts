import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  keyword: String = '';
  showInput: Boolean = false;
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  search(keyword: string) {
     this.bookService.searchBooks(keyword);
  }
}
