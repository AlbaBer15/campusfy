import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { DurationPipe } from '../../../shared/pipes/duration-pipe';

@Component({
  selector: 'app-playlists-home',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, DurationPipe],
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
    { title: 'City Lights', artist: 'Synth Academy', durationSec: 215, liked: false },
    { title: 'Analog Dreams', artist: 'Synth Academy', durationSec: 198, liked: true },
    { title: 'Rainy Window', artist: 'Lo-Fi Lab', durationSec: 241, liked: false }
  ];

  addTrack() {
    const t = this.newTrack.trim();
    if (!t) return;
    this.tracks.push({ title: t, artist: 'Unknown', durationSec: 180, liked: false });
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
    return index;
  }
}
