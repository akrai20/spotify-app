import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//SERVICES
import { SpotifyService } from './services/spotify.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//PIPES
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { PlayButtonPipe } from './pipes/play-button.pipe';

//app_routes
import { app_routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistComponent,
    PlayButtonPipe
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
