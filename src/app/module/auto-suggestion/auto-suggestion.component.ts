import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auto-suggestion',
  templateUrl: './auto-suggestion.component.html',
  styleUrls: ['./auto-suggestion.component.css']
})
export class AutoSuggestionComponent implements OnChanges {
  @Input() searchString: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.searchString);
  }
}
