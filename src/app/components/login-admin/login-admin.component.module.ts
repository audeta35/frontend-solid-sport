
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin.component';
import { routing } from './login-admin.component.routing';

@NgModule({
    imports: [routing, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [LoginAdminComponent]
})
export class LoginAdminComponentModule { }
