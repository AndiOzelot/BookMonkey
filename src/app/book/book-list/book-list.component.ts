import { Observable } from 'rxjs';
import { Book, Thumbnail } from './../../shared/book';
import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService) {
  }

  ngOnInit() {
    this.books$ = this.bs.getAll();
  }
}
