import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { BookService } from './book.service';
import { AppComponent } from './app.component';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		MatButtonModule,
		MatCheckboxModule,
	],
	providers: [
		BookService
	],
	bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
