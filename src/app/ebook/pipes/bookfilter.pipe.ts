import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../../interfaces/IBook';

@Pipe({
    name: 'bookfilter'
})

export class BookFilterPipe implements PipeTransform {
    transform(books: IBook[], ...args: any[]): any {
        const keyword = args[0];

        return books.filter(book => book.title.toLowerCase()
            .includes(keyword.toLowerCase()));
    }
}
