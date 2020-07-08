
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.component.routing';

@NgModule({
    imports: [routing, CommonModule],
    declarations: [IndexComponent]
})
export class IndexComponentModule { }
