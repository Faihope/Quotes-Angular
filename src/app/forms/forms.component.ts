import { Quotes } from '../quotes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quotes>();
  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
