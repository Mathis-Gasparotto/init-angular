import { Component, OnInit } from '@angular/core'
import { Entity } from './entity'
import { ENTITIES } from './mock-entity-list'

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to {{entitySelected.name}}!</h1>
  <h2>Liste des entités</h2>
  <ul>
    <li *ngFor="let entity of entities">{{entity.name}}</li>
  </ul>
  `,
  styles: []
})

export class AppComponent implements OnInit {
  entities = ENTITIES
  entitySelected: Entity

  ngOnInit(): void {
    console.table(this.entities)
    this.entitySelected = this.getRandomEntity(this.entities)
    this.selectEntity(this.entitySelected)
  }

  getRandomEntity(entityList: Entity[]): Entity {
    return entityList[Math.floor(Math.random() * entityList.length)]
  }

  selectEntity(entity: Entity) {
    console.log(`Vous avez cliqué sur l'entité ${entity.name}`)
  }
}
