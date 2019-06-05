import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { ToggleComponent } from './toggle/toggle.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { TextTransformDirective } from './text-transform.directive';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    ToggleComponent,
    QuoteCardComponent,
    TextTransformDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
