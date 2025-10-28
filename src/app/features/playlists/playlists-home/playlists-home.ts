import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para [(ngModel)] en plantilla
import { NgFor, NgIf, NgClass } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-playlists-home',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, DecimalPipe],
  templateUrl: './playlists-home.html',
  styleUrl: './playlists-home.css'
})
export class PlaylistsHome {
  title = 'Playlists';
  playlistName = 'Mi playlist';
  coverUrl = '\musical-notes.png'; // opcional, para property binding a <img>

  // Two-way binding y eventos
  newTrack = '';       // campo de entrada para añadir canciones
  filter = '';         // filtro de búsqueda

  // Lista de canciones (base)
  tracks = [
    { title: 'City Lights', artist: 'Synth Academy', durationSec: 215, liked: false },
    { title: 'Analog Dreams', artist: 'Synth Academy', durationSec: 198, liked: true },
    { title: 'Rainy Window', artist: 'Lo-Fi Lab',    durationSec: 241, liked: false }
  ];

  // --- Métodos (event handling) ---
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
  return track.id;
}


  // Filtro simple en plantilla (podrías mover esta lógica a un getter si prefieres)
}

