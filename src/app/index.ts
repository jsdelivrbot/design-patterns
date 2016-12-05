import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { ROUTER_MODULE }    from './app.routes';
import { ComponentsModule } from './components';
import { SidemenuModule }   from './UI';

@NgModule({
  imports: [
    BrowserModule,
    ROUTER_MODULE,
    ComponentsModule,
    SidemenuModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule {}
