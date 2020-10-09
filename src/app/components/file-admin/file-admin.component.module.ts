
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileAdminComponent } from './file-admin.component';
import { routing } from './file-admin.component.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [FileAdminComponent]
})
export class FileAdminComponentModule { }
