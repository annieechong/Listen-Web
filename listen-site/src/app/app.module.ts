import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed';
import { FriendsComponent } from './friends';
import { LibraryComponent } from './library';
import { ProfileComponent } from './profile';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FriendsComponent,
    LibraryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
