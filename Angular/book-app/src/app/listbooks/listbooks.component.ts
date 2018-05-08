import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../bookservice';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  constructor(private bookService:BookService) { }

  private books:Book[];
  ngOnInit() {
      this.bookService.getBooks().then(books=>this.books=books);  
    }

}
