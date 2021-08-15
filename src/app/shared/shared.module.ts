import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgxSpinnerModule,
        TooltipModule.forRoot(),
        RouterModule
    ],
    exports: [
        NgxSpinnerModule,
        TooltipModule,
        RouterModule,
        CommonModule
    ],
    providers: []
})
export class SharedModule { }
