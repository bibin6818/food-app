import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewCardComponent } from './view-card/view-card.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: ViewCardComponent, path: 'view' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
