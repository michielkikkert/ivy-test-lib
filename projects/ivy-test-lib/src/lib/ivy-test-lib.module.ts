import { NgModule } from '@angular/core';
import { IvyTestLibComponent } from './ivy-test-lib.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [IvyTestLibComponent],
    imports: [
        CommonModule
    ],
  exports: [IvyTestLibComponent]
})
export class IvyTestLibModule { }
