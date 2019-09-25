import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IvyTestLibModule } from '../../projects/ivy-test-lib/src/lib/ivy-test-lib.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        IvyTestLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
