import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed';
import { FriendsComponent } from './friends';
import { LibraryComponent } from './library';
import { ProfileComponent } from './profile';

const routes: Routes = [
    { path: 'friends', component: FriendsComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'profile', component: ProfileComponent }

    // otherwise redirect to home
    //{ path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);