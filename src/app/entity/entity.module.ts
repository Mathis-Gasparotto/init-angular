import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BorderCardDirective } from './border-card.directive'
import { EntityTypeColorPipe } from './entity-type-color.pipe'
import { ListEntityComponent } from './list-entity/list-entity.component'
import { DetailsEntityComponent } from './details-entity/details-entity.component'
import { RouterModule, Routes } from '@angular/router'
import { EntityService } from './entity.service'

const entityRoutes: Routes = [
  { path: 'entities', component: ListEntityComponent },
  { path: 'entities/:id', component: DetailsEntityComponent }
]

@NgModule({
  declarations: [
    BorderCardDirective,
    EntityTypeColorPipe,
    ListEntityComponent,
    DetailsEntityComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(entityRoutes)
  ],
  providers: [
    EntityService
  ],
})
export class EntityModule { }
