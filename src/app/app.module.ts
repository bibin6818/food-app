import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ViewCardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [BrowserModule, NgxPaginationModule],
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
