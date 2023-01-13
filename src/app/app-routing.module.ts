import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/layouts/main/main.component'
import { HomeComponent } from './pages/shop/home/home.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: '',
    component: HomeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
