import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { addEmployeeComponent } from './container/addemployee.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ContainerComponent,
    addEmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
