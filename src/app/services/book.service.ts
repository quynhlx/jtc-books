import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

    getBooks() {
        return [{
            cover: 'assets/book-cover-1.png',
            title: 'Lap trinh C++ 2',
            price: 10000,
            instock: true
        }, {
            cover: 'assets/book-cover-3.png',
            title: 'Angular',
            price: 20000
        }, {
            cover: 'assets/book-cover-5.png',
            title: 'Nodejs',
            price: 30000
        }, {
            cover: 'assets/book-cover-4.png',
            title: 'MongoDB',
            price: 50000
        }];
    }
}
