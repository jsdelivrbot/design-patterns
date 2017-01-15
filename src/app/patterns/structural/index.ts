import { NgModule }        from '@angular/core';

import { AdapterModule }   from './adapter';
import { BridgeModule }    from './bridge';
import { CompositeModule } from './composite';
import { DecoratorModule } from './decorator';
import { FacadeModule }    from './facade';
import { FlyweightModule } from './flyweight';
import { ProxyModule }     from './proxy';

@NgModule({
  imports: [
    AdapterModule,
    BridgeModule,
    CompositeModule,
    DecoratorModule,
    FacadeModule,
    FlyweightModule,
    ProxyModule,
  ],
})
export class StructuralModule {}
