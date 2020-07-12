import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './provider/services/users';
import { GlobalProvider } from './provider/global';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
