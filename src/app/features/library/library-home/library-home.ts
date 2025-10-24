import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TrackCard } from '../../../shared/track-card/track-card';
@Component({
  selector: 'app-library-home',
  standalone: true,
 imports: [NgFor, NgIf, TrackCard],
  templateUrl: './library-home.html',
  styleUrls: ['./library-home.css']
})
export class LibraryHome {
  tracks = [
    { title: 'City Lights',  artist: 'Synth Academy', durationSec: 215, liked: false },
    { title: 'Analog Dreams', artist: 'Synth Academy', durationSec: 198, liked: false },
    { title: 'Rainy Window', artist: 'Lo-Fi Lab',      durationSec: 241, liked: false }
  ];

  lastAdded: string | null = null;

  onAddFromCard(t: { title: string; artist: string; durationSec: number }) {
    this.lastAdded = `${t.title} — ${t.artist}`;
  }
}
