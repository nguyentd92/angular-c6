import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

  constructor(
    private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  submitDelete(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.delete(id || '');

    this.goBack();
  }

  goBack(): void {
    this.router.navigateByUrl('/')
  }
}
