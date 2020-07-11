import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { routing } from './index.component.routing';

const path = "http://localhost:3000/";
const config: SocketIoConfig = { url: path, options: {} };

@NgModule({
  imports: [routing, HttpClientModule, CommonModule, ReactiveFormsModule, SocketIoModule.forRoot(config)],
    declarations: [IndexComponent]
})
export class IndexComponentModule { }
