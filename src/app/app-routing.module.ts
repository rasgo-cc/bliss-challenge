import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'questions', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
