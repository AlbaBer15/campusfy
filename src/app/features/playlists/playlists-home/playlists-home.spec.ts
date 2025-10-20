import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsHome } from './playlists-home';

describe('PlaylistsHome', () => {
  let component: PlaylistsHome;
  let fixture: ComponentFixture<PlaylistsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistsHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
