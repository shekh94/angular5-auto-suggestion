import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoSuggestionComponent } from './auto-suggestion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutoSuggestionComponent],
  exports: [AutoSuggestionComponent]
})
export class AutoSuggestionModule {

}
