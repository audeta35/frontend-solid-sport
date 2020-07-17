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

const path = 'http://localhost:3000';
const config: SocketIoConfig = { url: path, options: {} };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    GlobalProvider,
    UserService,
    AtletService,
    MatchService,
    PointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
