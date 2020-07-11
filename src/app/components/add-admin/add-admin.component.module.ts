
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './add-admin.component';
import { routing } from './add-admin.component.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [AddAdminComponent]
})
export class AddAdminComponentModule { }
