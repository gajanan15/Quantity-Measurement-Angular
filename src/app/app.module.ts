import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnitTypeComponent } from './component/unit-type/unit-type.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ConversionsComponent } from './component/conversions/conversions.component';
import { HomeComponent } from './component/home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpService } from './services/http_service/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnitTypeComponent,
    ConversionsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
