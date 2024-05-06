import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsButtonComponent } from './components/buttons/templates/details-button/details-button.component';
import { DeleteButtonComponent } from './components/buttons/templates/delete-button/delete-button.component';
import { FuckingWrongComponentComponent } from './components/fucking-wrong-component/fucking-wrong-component.component';
import { FuckingTableComponent } from './components/fucking-table/fucking-table.component';
import { FuckingButtonBlockComponent } from './components/fucking-button-block/fucking-button-block.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsButtonComponent,
    DeleteButtonComponent,
    FuckingWrongComponentComponent,
    FuckingTableComponent,
    FuckingButtonBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
