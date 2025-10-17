import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryHome } from './features/library/library-home/library-home';

export const routes: Routes = [
  { path: 'library', component: LibraryHome },
  // De momento, Playlists apunta a LibraryHome como placeholder.
  { path: 'playlists', component: LibraryHome },

  { path: '', redirectTo: '/library', pathMatch: 'full' },
  { path: '**', redirectTo: '/library' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
