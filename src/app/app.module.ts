import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ShareComponent } from './share/share.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule }    from '@angular/common/http';
import { NoconnectivityComponent } from './noconnectivity/noconnectivity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ListComponent,
    DetailComponent,
    ShareComponent,
    NoconnectivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
