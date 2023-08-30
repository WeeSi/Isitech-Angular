import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar/avatar.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { AppRoutingModule } from './app-routing-module';
import { CustomDatePipe } from './custom-pipe/CustomDatePipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/services/token-interceptor/token-interceptor.service';
import { WeatherComponent } from './weather/weather.component';
import { FahrenheitToCelsiusPipe } from './custom-pipe/FahrenheitToCelsius';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountComponent,
    AvatarComponent,
    ItemsListComponent,
    CustomDatePipe,
    FahrenheitToCelsiusPipe,
    WeatherComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
