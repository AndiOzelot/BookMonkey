import { Book } from './../../shared/book';
import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'a.bm-book-list-item',
  templateUrl: './book-list-item.component.html'
})
export class BookListItemComponent {
  @Input() book: Book;
}

