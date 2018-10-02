import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';
import { Book } from './book';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class BookStoreService {
 //private api = 'https://book-monkey2-api.angular-buch.com';

  constructor( @Inject('API_URL') private api: string, private http: HttpClient) {
  }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  getAll(): Observable<Array<Book>> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks
          .map(rawBook => BookFactory.fromObject(rawBook)),
        ),
        catchError(this.errorHandler)
      );
  }

  getAllSearch(searchTerm: String): Observable<Array<Book>> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks
          .map(rawBook => BookFactory.fromObject(rawBook)),
        ),
        catchError(this.errorHandler)
      );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get<BookRaw>(`${this.api}/book/${isbn}`)
      .pipe(
        retry(3),
        map(rawBook => BookFactory.fromObject(rawBook)),
        catchError(this.errorHandler)
      );
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  check(isbn: string): Observable<Boolean> {
    return this.http
      .get(`${this.api}/book/${isbn}/check`)
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
