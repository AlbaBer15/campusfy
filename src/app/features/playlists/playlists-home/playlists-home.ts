import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { DurationPipe } from '../../../shared/pipes/duration-pipe';
import { TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-playlists-home',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, DurationPipe, TitleCasePipe, DatePipe],
  templateUrl: './playlists-home.html',
  styleUrl: './playlists-home.css'
})
export class PlaylistsHome {
  title = 'Playlists';
  playlistName = 'Mi playlist';
  coverUrl = '\\musical-notes.png';

  newTrack = '';
  filter = '';

 tracks = [
  { id: 1, title: 'city lights', artist: 'Synth Academy', duration: 215, liked: true, added: new Date(2024, 4, 15) },
  { id: 2, title: 'analog dreams', artist: 'Synth Academy', duration: 340, liked: false, added: new Date(2024, 4, 20) }
];


  addTrack() {
    const t = this.newTrack.trim();
    if (!t) return;
   this.tracks.push({
  id: this.tracks.length + 1,
  title: t,
  artist: 'Unknown',
  duration: 180,
  liked: false,
  added: new Date()
});

    this.newTrack = '';
  }

  addTrackOnEnter(ev: KeyboardEvent) {
    if ((ev.key || '').toLowerCase() === 'enter') this.addTrack();
  }

  toggleLike(index: number) {
    this.tracks[index].liked = !this.tracks[index].liked;
  }

  removeTrack(index: number) {
    this.tracks.splice(index, 1);
  }

trackByFn(index: number, track: any): number {
  return track.id;
}

}
