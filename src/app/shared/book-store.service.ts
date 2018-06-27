import { Book, Thumbnail } from './book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookStoreService {
  books: Book[];

  constructor() {
    this.books = [
      new Book(
        '9783864903571',
        'Angular',
        ['Johannes Hoppe', 'Dany Koppenhagen',
          'Ferdinand Malcher', 'Gregor Woiwode'],
        new Date(2017, 3, 1),
        `Grundlagen, fortgeschrittene Techniken und Best Practises
          mit Typescript - ab Angular 4, inklusive Nativescript
          und Redux`,
        5,
        [new Thumbnail('https://ng-buch.de/cover2.jpg',
          'Buchcover')],
        'Mit Angular setzen Sie auf ein modernes und modulares...'
      ),
      new Book(
        '9783864901546',
        'AngularJS',
        ['Philipp Tarasiewicz', 'Robin Böhm'],
        new Date(2014, 5, 29),
        'Eine praktische Einführung',
        5,
        [new Thumbnail('https://ng-buch.de/cover1.jpg',
          'Buchcover')],
        `Dieses Buch führt Sie anhand eines zusammenhängenden
          Beispielprojekts...` )
    ];
  }

  getAll() {
    return this.books;
  }

  getSingle(isbn) {
    return this.books.find(book => book.isbn === isbn);
  }
}
