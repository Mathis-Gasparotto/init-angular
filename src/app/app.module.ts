import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BorderCardDirective } from './border-card.directive'
import { EntityTypeColorPipe } from './entity-type-color.pipe'
import { ListEntityComponent } from './list-entity/list-entity.component'
import { DetailsEntityComponent } from './details-entity/details-entity.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    EntityTypeColorPipe,
    ListEntityComponent,
    DetailsEntityComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
