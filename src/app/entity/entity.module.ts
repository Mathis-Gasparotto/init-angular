import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BorderCardDirective } from './border-card.directive'
import { EntityTypeColorPipe } from './entity-type-color.pipe'
import { ListEntityComponent } from './list-entity/list-entity.component'
import { DetailsEntityComponent } from './details-entity/details-entity.component'
import { RouterModule, Routes } from '@angular/router'
import { EntityService } from './entity.service'
import { FormsModule } from '@angular/forms'
import { EntityFormComponent } from './entity-form/entity-form.component'
import { EditEntityComponent } from './edit-entity/edit-entity.component'
import { AddEntityComponent } from './add-entity/add-entity.component'
import { SearchEntityComponent } from './search-entity/search-entity.component'
import { LoaderComponent } from '../loader/loader.component'

const entityRoutes: Routes = [
  { path: 'entities', component: ListEntityComponent },
  { path: 'entities/add', component: AddEntityComponent },
  { path: 'entities/:id/edit', component: EditEntityComponent },
  { path: 'entities/:id', component: DetailsEntityComponent }
]

@NgModule({
  declarations: [
    BorderCardDirective,
    EntityTypeColorPipe,
    ListEntityComponent,
    DetailsEntityComponent,
    EntityFormComponent,
    EditEntityComponent,
    AddEntityComponent,
    SearchEntityComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(entityRoutes)
  ],
  providers: [
    EntityService
  ],
})
export class EntityModule { }
