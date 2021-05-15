import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from "../quotes";
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes: Quotes;
  @Output() isRead = new EventEmitter<boolean>();

  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quotes.upvote+=1;
  }
  downvote(){
    this.quotes.downvote+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
