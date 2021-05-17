import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from "../quotes";
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes: Quotes;
  @Output() isRead = new EventEmitter<boolean>();

  quote: Quotes[] = [
    new Quotes(1, 'Faith', '— John F. Kennedy', 'Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty. ', new Date(), 0, 0),


  ];
  deleteQuote(read: boolean) {
    this.isRead.emit(read);
  }
  upVote() {
    this.quotes.upvote += 1;
  }
  downVote() {
    this.quotes.downvote += 1;
  }
  preNum: number
  lastNum: number
  counter: number

  highestUpvote() {
    this.preNum = 0
    this.lastNum = 0



    for (this.counter = 0; this.counter < this.quote.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvote;
      if (this.lastNum > this.preNum) { this.preNum = this.lastNum }
    }
    return this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
