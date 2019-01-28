import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artista:any;
  artistas:any[] = [];
  top:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQBivNbUqKPbqHBqi_ajzuQDXZiy1Ku2Wf-R9lHSyBqZHoaOLLOMslRL2Dnf_0_6mh-CsFcnIzzgcoSRcaM';


  constructor(public http:HttpClient) {

  }

  getHeader():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization':'Bearer ' + this.token
    });;

    return headers;

  }

  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeader();
    return this.http.get(url,{ headers })
            .subscribe( (resp) => {
                this.artista = resp;
            });

  }

  getArtistas(artista:string){
    let url = `${this.urlSpotify}search?query=${artista}&type=artist&market=US&limit=20`;
    let headers = this.getHeader();
    return this.http.get(url, { headers })
                .map( (resp:any) => {
                  this.artistas = resp.artists.items;
                    return this.artistas;
                });
  }

  getTopTrack(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=CR`;
    let headers = this.getHeader();

    return this.http.get(url, { headers })
                .map( (resp:any) => {
                  this.top = resp.tracks;
                  return this.top;
                });
  }

}
