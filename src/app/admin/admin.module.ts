import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ],
  declarations: [BookFormComponent]
})
export class AdminModule { }
