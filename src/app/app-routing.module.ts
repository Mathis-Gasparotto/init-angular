import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListEntityComponent } from './list-entity/list-entity.component'
import { DetailsEntityComponent } from './details-entity/details-entity.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'entities', component: ListEntityComponent },
  { path: 'entities/:id', component: DetailsEntityComponent },
  { path: '', redirectTo: 'entities', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
