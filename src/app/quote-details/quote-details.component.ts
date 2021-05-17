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
upvote:number=0;
downvote:number=0;
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upVote(){
    this.quotes.upvote+=1;
  }
  downVote(){
    this.quotes.downvote+=1;
  }
  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.upvote; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
