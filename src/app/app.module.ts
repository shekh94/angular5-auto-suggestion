import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
// import our module
import { HeaderModule } from 'angular5-auto-suggestion';
import { AutoSuggestionModule } from './module/auto-suggestion/auto-suggestion.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    AutoSuggestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
