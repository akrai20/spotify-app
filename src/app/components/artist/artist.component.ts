import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit{

  id:string = '';
  constructor(private activatedRoute:ActivatedRoute,public _spotify:SpotifyService) {

  }
  ngOnInit(){
    this.activatedRoute.params
        .map(params => params.id)
        .subscribe( id => {
          this.id = id;
          this._spotify.getArtista(id);
          this._spotify.getTopTrack(id).subscribe(canciones => {
              console.log(canciones);
          });;
        });
  }

}
