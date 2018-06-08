import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() keyword: String = '';
  @Output() keywordChange = new EventEmitter<String>();
  activated: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onChange(key: String) {
    this.keywordChange.emit(key);
    console.log(key);

    if (key === '') {
      this.activated = false;
    }
  }

}
