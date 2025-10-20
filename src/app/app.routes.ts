import { Routes } from '@angular/router';
import { LibraryHome } from './features/library/library-home/library-home';
import { PlaylistsHome } from './features/playlists/playlists-home/playlists-home';

export const routes: Routes = [
  { path: 'library', component: LibraryHome },
  { path: 'playlists', component: PlaylistsHome },
  { path: '', redirectTo: '/library', pathMatch: 'full' },
  { path: '**', redirectTo: '/library' }
];
