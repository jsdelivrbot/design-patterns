import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { ComponentsModule } from './components';
import { ROUTER_MODULE }    from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    ROUTER_MODULE,
    ComponentsModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule {}
