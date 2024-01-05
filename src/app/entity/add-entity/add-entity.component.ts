import { Component, OnInit } from '@angular/core'
import { Entity } from '../entity'

@Component({
  selector: 'app-add-entity',
  template: `
    <h2 class="center">Add entity</h2>
    <app-entity-form [entity]="entity"></app-entity-form>
  `,
  styles: [
  ]
})
export class AddEntityComponent implements OnInit {

  entity: Entity

  ngOnInit() {
    this.entity = new Entity()
  }

}
 