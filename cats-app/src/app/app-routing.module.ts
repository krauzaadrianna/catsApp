import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'cats', pathMatch: 'full' },
      {
        path: 'cats',
        loadChildren: () =>
          import('./core/cats/cats.module').then(
            (module) => module.CatsModule
          ),
      },     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
