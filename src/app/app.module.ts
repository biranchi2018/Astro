import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { DataHolderProvider } from '../providers/DataHolderProvider';
import { FavouritesPage } from './../pages/favourites/favourites';

@NgModule({
  declarations: [
    MyApp,
    FavouritesPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__AstroDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      backButtonText: 'Back',
      scrollAssist: false,
      autoFocusAssist: false,
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavouritesPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataHolderProvider
  ]
})
export class AppModule { }
