import { IBook } from './../interfaces/IBook';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Http } from '@angular/http';
import * as uuid from 'uuid';
@Injectable()
export class BookService {
    constructor(private http: Http) {
    }
    private _books: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);
    get books() {
        return this._books.asObservable();
    }
    getBooks() {
        return this.getBooksFromServer();
    }
    // mockup get data from server
    private getBooksFromServer() {
        this.http.get('http://localhost:3000/books').subscribe(res => {
            const books = res.json();
            this._books.next(books);
        });
    }

    searchBooks(keyword: string) {
        const books = this._books.getValue().filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
        this._books.next(books);
    }

    addBook(book: IBook) {
        book.id = uuid.v4().toString();
        this.http.post('http://localhost:3000/books', book).subscribe(res => {
            this._books.getValue().push(book);
            this._books.next(this._books.getValue());
        });
    }
}
