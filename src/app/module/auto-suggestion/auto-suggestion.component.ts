import { Component, OnChanges, Input, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-auto-suggestion',
  templateUrl: './auto-suggestion.component.html',
  styleUrls: ['./auto-suggestion.component.css']
})
export class AutoSuggestionComponent implements OnChanges {
  @Input() searchString: string;
  @Input() chosenValue: any;
  // @Output() chosenValueChange = new EventEmitter<boolean>();
  @Input() optionsArray: string[];
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.searchString);
  }
}
