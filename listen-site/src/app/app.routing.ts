import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { FriendsComponent } from './friends/friends.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: FeedComponent },
    { path: 'feed', component: FeedComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })

export class AppRoutingModule { }