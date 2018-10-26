import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';

// import { SorterService } from './core/sorter.service';
// import { DataService } from './core/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    ShareModule,
    CoreModule
  ],
  providers: [], // [DataService, SorterService]
  bootstrap: [AppComponent]
})
export class AppModule { }
