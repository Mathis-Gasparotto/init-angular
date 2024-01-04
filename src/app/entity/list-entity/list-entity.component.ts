import { Component } from '@angular/core'
import { ENTITIES } from '../mock-entity-list'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styles: [
  ]
})
export class ListEntityComponent {
  entities = ENTITIES

  constructor(private router: Router) { }

  goToEntityDetails(id: number) {
    this.router.navigate(['/entities', id])
  }

}
