import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoSuggestionComponent } from './auto-suggestion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AutoSuggestionComponent],
  exports: [AutoSuggestionComponent]
})
export class AutoSuggestionModule {

}
