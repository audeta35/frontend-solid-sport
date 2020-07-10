import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileJuriComponent } from './file-juri.component';
import { routing } from './file-juri.component.routing';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const path = "http://localhost:3000/";
const config: SocketIoConfig = { url: path, options: {} };

@NgModule({
    imports: [routing, CommonModule, SocketIoModule.forRoot(config)],
    declarations: [FileJuriComponent]
})
export class FileJuriComponentModule { }
