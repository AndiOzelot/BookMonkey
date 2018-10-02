import { Book } from './../shared/book';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-home',
  template: `
    <div class="ui container three column grid">
      <div class="ui container column">
        <h1 i18n="@@HomeComponent:header">Home</h1>
        <p i18n="a proud sentence about the project@@HomeCompnent:tagline">Das ist der BookMonkey.</p>
        <a routerLink="../books" class="ui red button">
          <!--i18n: Text of the link to the books screen@@HomeComponent:book list link -->
          Buchliste ansehen
          <!--/i18n-->
          <i class="right arrow icon"></i>
        </a>
      </div>

      <bm-search (bookSelected)="bookSelected($event)" class="column"></bm-search>
    </div>
    `
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  bookSelected(book: Book) {
    this.router.navigate(['../books', book.isbn], {relativeTo: this.route});
  }
}
