import { Component, OnInit } from '@angular/core'
import { Entity } from './entity'
import { ENTITIES } from './mock-entity-list'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})

export class AppComponent implements OnInit {
  entities = ENTITIES
  entitySelected: Entity

  ngOnInit(): void {
    console.table(this.entities)
    const entity = this.getRandomEntity(this.entities)
    this.selectEntity(entity)
  }

  getRandomEntity(entityList: Entity[]): Entity {
    return entityList[Math.floor(Math.random() * entityList.length)]
  }

  selectEntity(entity: Entity|MouseEvent) {
    if (entity instanceof MouseEvent) {
      this.entitySelected = this.entities[Number((entity.target as HTMLInputElement).value)]
    } else {
      this.entitySelected = entity
    }
    console.log(`Vous avez cliqué sur l'entité ${this.entitySelected.name}`)
  }
}
