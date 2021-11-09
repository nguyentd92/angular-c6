import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  form!: FormGroup;

  control(controlName: string): AbstractControl {
    return this.form.controls[controlName];
  }

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit(): void { // Lifecycle Hooks
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(255)]], // Tuple: [initialValue, [...Validators]]
      author: ['', [Validators.required]],
      price: [40000, [Validators.required, Validators.min(5000)]],
      categoryId: [null]
    })
  }

  submit(): void {
    if (this.form.invalid)
      alert('Form is not valid')

    const { title, author, price } = this.form.value;

    const book: Book = {
      title: title,
      author: author,
      price: price
    }

    this.bookService.create(book);
  }
}
