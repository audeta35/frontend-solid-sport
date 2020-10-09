
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin.component';
import { routing } from './login-admin.component.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [routing, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    declarations: [LoginAdminComponent]
})
export class LoginAdminComponentModule { }
