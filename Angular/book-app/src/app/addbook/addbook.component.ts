import { Component, OnInit } from '@angular/core';
import { BookService } from '../bookservice';
import { Book } from '../book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  private newBook=new Book();

  constructor(private bookService:BookService) { }

 saveBook(book:Book){
  this.bookService.saveBook(book);
  this.clearFields();
}

clearFields(){
  this.newBook.id=undefined;
  this.newBook.title="";
  this.newBook.author="";
}

  ngOnInit() {
  
  }

}
