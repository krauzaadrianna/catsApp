import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppStoreModule } from '@app/app-store.module';
import { ErrorInterceptor } from '@app/core/error/error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppStoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    ErrorInterceptor,
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ]
})
export class AppModule { }
