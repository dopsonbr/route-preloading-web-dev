import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PreloadAllModules, PreloadingStrategy, Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import {EMPTY, Observable} from "rxjs";

@Injectable()
class ProductListingPreloader implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log('route', route);
    if(route.path === 'nested') {
      return fn();
    }
    return EMPTY;
  }
}


@NgModule({
  declarations: [AppComponent, HomeComponent],
  providers: [{
    provide: ProductListingPreloader,
    useClass: ProductListingPreloader
  }],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'nyan',
        loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }
    ], {scrollPositionRestoration: 'enabled',preloadingStrategy: ProductListingPreloader}),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    EffectsModule.forRoot([])
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
