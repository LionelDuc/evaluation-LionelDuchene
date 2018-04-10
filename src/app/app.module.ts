import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {enableProdMode} from '@angular/core';

import { BookService } from './book.service';
import { AppComponent } from './app.component';

enableProdMode();

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatCardModule,
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
