
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAdminComponent } from './edit-admin.component';
import { routing } from './edit-admin.component.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [EditAdminComponent]
})
export class EditAdminComponentModule { }
