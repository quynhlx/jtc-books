import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IBook } from '../../interfaces/IBook';
import { map } from 'rxjs/operators';
@Injectable()
export class BookService {


    private _books: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);
    get books() {
        return this._books.asObservable();
    }
    constructor(private http: HttpClient) {
    }

    getBooks(pageSize: number = 6, page: number = 1): Observable<IBook[]>{
        return this.http.get('/books').pipe(map(books => {
            const pagination = this.paginate(books as IBook[], pageSize, page);
            this._books.next(pagination);
            return books as IBook[];
        }));
    }

    getBook(id: number) {
        return this.http.get('/books/' + id);
    }

    searchBooks(keyword: string): Observable<IBook[]> {
        return this.http.get(`/books?q=${keyword}`).pipe(map(books => {
            return books as IBook[];
        }));
    }

    paginate(books: IBook[], pageSize: number, pageNumber: number): IBook[] {
        --pageNumber;
        return books.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
    }
    createBook(book: IBook) {
        book.id = Date.now();
        return this.http.post('/books', book).subscribe(() => {
            this._books.getValue().push(book);
            const newBooks = this._books.getValue();
            this._books.next(newBooks);
        });
    }

    removeBook(id: number) {
        return this.http.delete('/books/' + id).subscribe(() => {
            const index = this._books.getValue().findIndex(b => b.id === id);
            this._books.getValue().splice(index, 1);
            this._books.next(this._books.getValue());
        });
    }

    editBook(book: IBook) {
        return this.http.put('/books/' + book.id, book).subscribe(() => {
            const index = this._books.getValue().findIndex(b => b.id === book.id);
            this._books.getValue()[index] = book;
            this._books.next(this._books.getValue());
        });
    }
}
