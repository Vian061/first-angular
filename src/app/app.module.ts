import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DrawerMenuItemComponent } from './drawer/drawer-menu-item/drawer-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DrawerComponent,
    AboutUsComponent,
    DrawerComponent,
    DrawerMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
