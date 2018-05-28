import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() keyword: String = '';
  @Output() changeKeyword = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  search() {
    this.changeKeyword.emit(this.keyword);
  }

}
