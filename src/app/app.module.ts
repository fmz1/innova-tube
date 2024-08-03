import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/enviroment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,

      // ERROR solution nullinjecterror
      AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    provideFirebaseApp(() => initializeApp({"projectId":"innova-tube","appId":"1:841142659106:web:e81f533f8e770f620a827b","storageBucket":"innova-tube.appspot.com","apiKey":"AIzaSyDzUvRPi_QTECHNVzKjyn1W9paqCHioPTc","authDomain":"innova-tube.firebaseapp.com","messagingSenderId":"841142659106"})),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
