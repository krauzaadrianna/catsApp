import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '@app/app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'cats', pathMatch: 'full' },
      { path: 'cats',
        loadChildren: () =>
          import('@cats/cats.module').then(
            (module) => module.CatsModule
          ),
      },
      { path: 'error',
        loadChildren: () =>
          import('./core/error/error.module').then(
            (module) => module.ErrorModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'error'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
