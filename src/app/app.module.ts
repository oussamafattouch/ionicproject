import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//firebase config 
export const firebaseConfig = {
  apiKey: "AIzaSyC2bvuNIkRJLOcDsfgDkZ_cKPsD4jJFYcg",
  authDomain: "todoapp-9cf6e.firebaseapp.com",
  projectId: "todoapp-9cf6e",
  storageBucket: "todoapp-9cf6e.appspot.com",
  messagingSenderId: "549165946728",
  appId: "1:549165946728:web:45df2066ec940b043e68dd",
  measurementId: "${config.measurementId}"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule , AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
