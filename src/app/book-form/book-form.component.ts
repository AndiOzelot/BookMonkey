import { Thumbnail } from './../shared/thumbnail';
import { BookFormErrorMessages } from './../book-form/book-form-error-messages';
import { BookStoreService } from './../shared/book-store.service';
import { BookFactory } from './../shared/book-factory';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  book = BookFactory.empty();
  errors: { [key: string]: string } = {};

  constructor(private bs: BookStoreService) {

  }

  ngOnInit() {
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of BookFormErrorMessages) {
      const control = this.myForm.form.get(message.forControl);
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    this.book.authors = this.myForm.value.authors.split(',');
    this.book.thumbnails = [ this.myForm.value.thumbnail ];

    const book = BookFactory.fromObject(this.book);
    this.bs.create(book).subscribe(res => {
      this.book = BookFactory.empty();
      this.myForm.reset(BookFactory.empty());
    });
  }
}
