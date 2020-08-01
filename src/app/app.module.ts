import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './provider/services/users';
import { GlobalProvider } from './provider/global';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AtletService } from './provider/services/atlet';
import { MatchService } from './provider/services/match';
import { PointService } from './provider/services/points';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TatamiServices } from './provider/services/tatami';
import { MenuScoreboardComponent } from './components/menu-scoreboard/menu-scoreboard.component';

let path = 'http://localhost:3000';
// let path = 'http://192.168.43.164:3000';
// let path = 'http://192.168.10.116:3000';
// const path = 'http://localhost:3000';
// let path = 'http://192.168.43.164:3000/';
// let path = 'http://192.168.1.74:3000/';
// let path = 'http://192.168.43.183:3000/';
// const path = 'http://192.168.10.116:3000';
// let path = "https://solidapi.bisapastibisa.com";

const config: SocketIoConfig = { url: path, options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately',
    }),
  ],
  providers: [
    GlobalProvider,
    UserService,
    AtletService,
    MatchService,
    PointService,
    TatamiServices
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
