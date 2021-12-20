import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbModule } from '@protoarch.angular/ab';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AbModule.forRoot([
      {
        versions: [ 'old', 'new' ],
        versionForCrawlers: 'old',
        expiration: 45,
      },
    ]),
    BrowserModule
  ],
  exports: [AbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
