import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-track-card',
  standalone: true,
  imports: [NgIf, DecimalPipe],  // ✅ añade estas directivas
  templateUrl: './track-card.html',
  styleUrls: ['./track-card.css']
})

export class TrackCard {
  @Input() title = '';
  @Input() artist = '';
  @Input() durationSec = 0;
  @Input() liked = false;

  @Output() added = new EventEmitter<{ title: string; artist: string; durationSec: number }>();

  add() {
    this.added.emit({ title: this.title, artist: this.artist, durationSec: this.durationSec });
  }
}
