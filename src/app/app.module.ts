import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ShareComponent } from './share/share.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ListComponent,
    DetailComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
