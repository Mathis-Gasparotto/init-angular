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
  entitySelected: Entity|undefined

  ngOnInit(): void {
    console.table(this.entities)
    const entity = this.getRandomEntity(this.entities)
    this.selectEntity(entity.id)
  }

  getRandomEntity(entityList: Entity[]): Entity {
    return entityList[Math.floor(Math.random() * entityList.length)]
  }

  selectEntity(entityId: number|string) {
    if (typeof entityId === 'string') {
      entityId = parseInt(entityId)
    }
    this.entitySelected = this.entities.find(entity => entity.id === entityId)
    if (this.entitySelected) {
      console.log(`Vous avez demandé l'entité ${this.entitySelected.name}`)
    } else {
      console.log(`Vous avez demandé une entité qui n'existe pas`)
    }
  }
}
