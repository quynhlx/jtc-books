import { BookService } from './services/book.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { BookComponent } from './book/book.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AddBookDialogComponent } from './add-book-dialog/add-book-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContentComponent,
    FilterPipe,
    BookComponent,
    AddBookDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    AddBookDialogComponent
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
