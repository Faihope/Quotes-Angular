import { Quotes } from '../quotes';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  newQuote = new Quotes (0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quotes>();
  submitGoal(){
    this.addQuote.emit(this.newQuote);
      }
  constructor() { }

  ngOnInit(): void {
  }

}
